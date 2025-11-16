import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

function formatDate(tsMs: number): string {
  const d = new Date(tsMs)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  const ss = String(d.getSeconds()).padStart(2, '0')
  return `${y}-${m}-${day} ${hh}:${mm}:${ss}`
}

function sanitizeFileName(name: string): string {
  return name.replace(/[\\/:*?"<>|]/g, '_')
}

function mapContentByType(type: number, content: string): string {
  switch (type) {
    case 1:
      return content
    case 3:
      return '[图片]'
    case 34:
      return '[语音]'
    case 43:
      return '[视频]'
    case 47:
      return '[大表情]'
    case 49:
      return '[分享卡片]'
    case 1000:
      return '[撤回消息提醒]'
    case 436207665:
      return '[微信红包]'
    case 419430449:
      return '[微信转账]'
    case 1090519089:
      return '[文件]'
    default:
      return content || '[未知类型]'
  }
}

async function main() {
  const dbPath = path.resolve(process.cwd(), 'decryption_en_micro_msg.sqlite')
  if (!fs.existsSync(dbPath)) {
    throw new Error(`数据库文件未找到: ${dbPath}`)
  }

  const userinfo = await prisma.$queryRaw<Array<{ id: number; value: string }>>`SELECT id, value FROM userinfo`
  const selfId = userinfo.find(r => r.id === 2)?.value || ''
  const selfNickname = userinfo.find(r => r.id === 4)?.value || selfId || '我'

  const contactsRows = await prisma.$queryRaw<Array<{ username: string; conRemark: string | null; nickname: string | null }>>`SELECT username, conRemark, nickname FROM rcontact`
  const contacts = new Map<string, string>()
  for (const r of contactsRows) {
    const name = (r.conRemark && r.conRemark.trim().length ? r.conRemark : r.nickname) || ''
    contacts.set(r.username, name)
  }

  const messages = await prisma.$queryRaw<Array<{ msgSvrId: string; type: number; isSend: number; createTime: number; talker: string; content: any }>>`
    SELECT msgSvrId, type, isSend, createTime, talker, content FROM message
  `

  const byChat = new Map<string, Array<{ time: number; sender: string; content: string; type: number }>>()

  for (const m of messages) {
    const chatId = m.talker
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
    const arr = byChat.get(chatId) || []
    arr.push({ time: m.createTime, sender: senderName || senderId || '未知', content: mapped, type: m.type })
    byChat.set(chatId, arr)
  }

  const outDir = path.resolve(process.cwd(), 'output')
  fs.mkdirSync(outDir, { recursive: true })

  for (const [chatId, items] of byChat.entries()) {
    items.sort((a, b) => a.time - b.time)
    const isGroup = chatId.endsWith('@chatroom')
    const chatDisplayName = contacts.get(chatId) || chatId
    const baseName = isGroup
      ? `${sanitizeFileName(chatDisplayName)}-${sanitizeFileName(chatId)}.txt`
      : `${sanitizeFileName(chatDisplayName)}-${sanitizeFileName(chatId)}.txt`
    const filePath = path.join(outDir, baseName)
    const lines: string[] = []
    for (const it of items) {
      const ts = formatDate(it.time)
      lines.push(`${ts} ${it.sender} ${it.content}`)
    }
    fs.writeFileSync(filePath, lines.join('\n'), { encoding: 'utf8' })
  }

  await prisma.$disconnect()
}

main().catch(async e => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})