import { ensureDbFile, loadEnvConfig, parseSelectionArgs } from './modules/config.js'
import { prisma } from './modules/db'
import { formatDate, formatMonth, sanitizeFileName, mapContentByType } from './modules/utils/format.js'
import { fetchContacts, fetchChatrooms, fetchSelfInfo } from './modules/services/contacts.js'
import { exportLists, exportChatContent } from './modules/exporter'
import path from 'path'
import fs from 'fs'

async function main() {
  const { dbPath, outDir } = loadEnvConfig()
  ensureDbFile(dbPath)

  const { selfId, selfNickname } = await fetchSelfInfo(prisma)
  const contacts = await fetchContacts(prisma)
  const chatrooms = await fetchChatrooms(prisma, contacts)

  await exportLists(outDir, contacts, chatrooms)

  const { uids, type } = parseSelectionArgs()
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
    await exportChatContent({ prisma, chatId, contacts, chatrooms, selfId, selfNickname, outDir })
  }

  await prisma.$disconnect()
}

main().catch(async e => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})