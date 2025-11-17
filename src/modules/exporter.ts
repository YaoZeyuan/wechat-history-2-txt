import path from 'path'
import fs from 'fs'
import type { PrismaClient } from '@prisma/client'
import { formatDate, formatMonth, sanitizeFileName, mapContentByType } from './utils/format.js'
import { fetchMessagesByChat } from './services/messages.js'

/**
 * 导出联系人与群聊列表到 output/_index
 */
export async function exportLists(outDir: string, contacts: Map<string, string>, chatrooms: Map<string, string>) {
  const idxDir = path.join(outDir, '_index')
  fs.mkdirSync(idxDir, { recursive: true })
  const contactsLines = Array.from(contacts.entries()).map(([id, name]) => `${name || id} ${id}`)
  const chatroomLines = Array.from(chatrooms.entries()).map(([id, name]) => `${name || id} ${id}`)
  fs.writeFileSync(path.join(idxDir, 'contacts.txt'), contactsLines.join('\n'), { encoding: 'utf8' })
  fs.writeFileSync(path.join(idxDir, 'chatrooms.txt'), chatroomLines.join('\n'), { encoding: 'utf8' })
}

type ExportChatParams = {
  prisma: PrismaClient
  chatId: string
  contacts: Map<string, string>
  chatrooms: Map<string, string>
  selfId: string
  selfNickname: string
  outDir: string
}

/**
 * 导出单个会话内容到独立文件夹，并按 10万 行进行分割（跨月累加，单月超限拆分 part）
 */
export async function exportChatContent(params: ExportChatParams) {
  const { prisma, chatId, contacts, chatrooms, selfId, selfNickname, outDir } = params
  const rows = await fetchMessagesByChat(prisma, chatId)
  const items: Array<{ time: number; sender: string; content: string; type: number }> = []
  for (const m of rows) {
    const isGroup = chatId.endsWith('@chatroom')
    let rawContent: string
    if (Buffer.isBuffer(m.content)) {
      rawContent = m.content.toString('utf8')
    } else if (typeof m.content === 'string') {
      rawContent = m.content
    } else {
      rawContent = ''
    }
    let senderId = selfId
    let senderName = selfNickname
    let content = rawContent || ''
    if (isGroup) {
      if (m.isSend === 1) {
        senderId = selfId
        senderName = contacts.get(selfId) || selfNickname
      } else {
        const colonIdx = rawContent.indexOf(':')
        const nlIdx = rawContent.indexOf('\n')
        const talkerId = colonIdx >= 0 ? rawContent.slice(0, colonIdx) : ''
        senderId = talkerId || ''
        senderName = (talkerId && contacts.get(talkerId)) || talkerId || '未知成员'
        content = nlIdx >= 0 ? rawContent.slice(nlIdx + 1) : rawContent
      }
    } else {
      if (m.isSend === 1) {
        senderId = selfId
        senderName = contacts.get(selfId) || selfNickname
      } else {
        senderId = chatId
        senderName = contacts.get(chatId) || chatId
      }
    }
    const mapped = mapContentByType(m.type, content)
    items.push({ time: m.createTime, sender: senderName || senderId || '未知', content: mapped, type: m.type })
  }

  items.sort((a, b) => a.time - b.time)
  if (!items.length) return
  const isGroup = chatId.endsWith('@chatroom')
  const chatDisplayName = contacts.get(chatId) || (isGroup ? chatrooms.get(chatId) || chatId : chatId)
  const folderName = `${sanitizeFileName(chatDisplayName)}-${sanitizeFileName(chatId)}`
  const chatDir = path.join(outDir, folderName)
  fs.mkdirSync(chatDir, { recursive: true })

  const months = new Map<string, string[]>()
  for (const it of items) {
    const month = formatMonth(it.time)
    const ts = formatDate(it.time)
    const line = `${it.sender} ${ts}\n${it.content}`
    const arr = months.get(month) || []
    arr.push(line)
    months.set(month, arr)
  }
  const orderedMonths = Array.from(months.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  let batchStart: string | null = null
  let batchEnd: string | null = null
  let batchLines: string[] = []
  const limit = 10000
  for (const [month, lines] of orderedMonths) {
    if (lines.length <= limit) {
      if (batchLines.length + lines.length <= limit) {
        if (!batchStart) batchStart = month
        batchEnd = month
        batchLines.push(...lines)
      } else {
        const fname = `${batchStart}-${batchEnd}.txt`
        fs.writeFileSync(path.join(chatDir, fname), batchLines.join('\n'), { encoding: 'utf8' })
        batchStart = month
        batchEnd = month
        batchLines = [...lines]
      }
    } else {
      if (batchLines.length) {
        const fname = `${batchStart}-${batchEnd}.txt`
        fs.writeFileSync(path.join(chatDir, fname), batchLines.join('\n'), { encoding: 'utf8' })
        batchStart = null
        batchEnd = null
        batchLines = []
      }
      let part = 1
      for (let i = 0; i < lines.length; i += limit) {
        const chunk = lines.slice(i, i + limit)
        const fname = `${month}-${month}.part.${part}.txt`
        fs.writeFileSync(path.join(chatDir, fname), chunk.join('\n'), { encoding: 'utf8' })
        part++
      }
    }
  }
  if (batchLines.length) {
    const fname = `${batchStart}-${batchEnd}.txt`
    fs.writeFileSync(path.join(chatDir, fname), batchLines.join('\n'), { encoding: 'utf8' })
  }
}