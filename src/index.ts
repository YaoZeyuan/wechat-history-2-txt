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

function formatMonth(tsMs: number): string {
  const d = new Date(tsMs)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  return `${y}-${m}`
}

function parseArgs() {
  const args = process.argv.slice(2)
  const get = (key: string) => {
    const i = args.findIndex(a => a === `--${key}` || a.startsWith(`--${key}=`))
    if (i === -1) return undefined
    const v = args[i].includes('=') ? args[i].split('=')[1] : args[i + 1]
    return v
  }
  const uidArg = get('uid') ?? process.env.EXPORT_UIDS
  const typeArg = get('type') ?? process.env.EXPORT_TYPE ?? 'all'
  const uids = uidArg ? uidArg.split(',').map(s => s.trim()).filter(Boolean) : []
  return { uids, type: typeArg as 'contact' | 'chatroom' | 'all' }
}

async function exportLists(outDir: string, contacts: Map<string, string>, chatrooms: Map<string, string>) {
  const idxDir = path.join(outDir, '_index')
  fs.mkdirSync(idxDir, { recursive: true })
  const contactsLines = Array.from(contacts.entries()).map(([id, name]) => `${name || id} ${id}`)
  const chatroomLines = Array.from(chatrooms.entries()).map(([id, name]) => `${name || id} ${id}`)
  fs.writeFileSync(path.join(idxDir, 'contacts.txt'), contactsLines.join('\n'), { encoding: 'utf8' })
  fs.writeFileSync(path.join(idxDir, 'chatrooms.txt'), chatroomLines.join('\n'), { encoding: 'utf8' })
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

  const outDir = path.resolve(process.cwd(), 'output')
  fs.mkdirSync(outDir, { recursive: true })

  const chatroomRows = await prisma.$queryRaw<Array<{ chatroomname: string; displayname: string | null }>>`SELECT chatroomname, displayname FROM chatroom`
  const chatrooms = new Map<string, string>()
  for (const r of chatroomRows) {
    const id = r.chatroomname
    const name = r.displayname || contacts.get(id) || ''
    chatrooms.set(id, name)
  }

  await exportLists(outDir, contacts, chatrooms)

  const { uids, type } = parseArgs()
  const selectedChats: string[] = []
  if (uids.length) {
    for (const id of uids) {
      const isGroup = id.endsWith('@chatroom')
      if (type === 'contact' && isGroup) continue
      if (type === 'chatroom' && !isGroup) continue
      selectedChats.push(id)
    }
  } else {
    if (type === 'contact' || type === 'all') {
      for (const id of contacts.keys()) {
        if (!id.endsWith('@chatroom')) selectedChats.push(id)
      }
    }
    if (type === 'chatroom' || type === 'all') {
      for (const id of chatrooms.keys()) selectedChats.push(id)
    }
  }

  for (const chatId of selectedChats) {
    const rows = await prisma.$queryRaw<Array<{ msgSvrId: string; type: number; isSend: number; createTime: number; talker: string; content: any }>>`
      SELECT msgSvrId, type, isSend, createTime, talker, content FROM message WHERE talker = ${chatId}
    `
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
    if (!items.length) continue
    const isGroup = chatId.endsWith('@chatroom')
    const chatDisplayName = contacts.get(chatId) || (isGroup ? chatrooms.get(chatId) || chatId : chatId)
    const folderName = `${sanitizeFileName(chatDisplayName)}-${sanitizeFileName(chatId)}`
    const chatDir = path.join(outDir, folderName)
    fs.mkdirSync(chatDir, { recursive: true })

    const months = new Map<string, string[]>()
    for (const it of items) {
      const month = formatMonth(it.time)
      const ts = formatDate(it.time)
      const line = `${ts} ${it.sender} ${it.content}`
      const arr = months.get(month) || []
      arr.push(line)
      months.set(month, arr)
    }
    const orderedMonths = Array.from(months.entries()).sort((a, b) => a[0].localeCompare(b[0]))
    let batchStart: string | null = null
    let batchEnd: string | null = null
    let batchLines: string[] = []
    const limit = 100000
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

  await prisma.$disconnect()
}

main().catch(async e => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})