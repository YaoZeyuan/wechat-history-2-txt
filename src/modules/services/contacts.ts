import type { PrismaClient } from '@prisma/client'

/**
 * 获取自身的微信 id 与昵称
 */
export async function fetchSelfInfo(prisma: PrismaClient) {
  const rows = await prisma.$queryRaw<Array<{ id: number; value: string }>>`SELECT id, value FROM userinfo`
  const selfId = rows.find(r => r.id === 2)?.value || ''
  const selfNickname = rows.find(r => r.id === 4)?.value || selfId || '我'
  return { selfId, selfNickname }
}

/**
 * 获取联系人映射（username -> 显示名）, 优先备注，其次昵称
 */
export async function fetchContacts(prisma: PrismaClient) {
  const contactsRows = await prisma.$queryRaw<Array<{ username: string; conRemark: string | null; nickname: string | null }>>`SELECT username, conRemark, nickname FROM rcontact`
  const contacts = new Map<string, string>()
  for (const r of contactsRows) {
    const name = (r.conRemark && r.conRemark.trim().length ? r.conRemark : r.nickname) || ''
    contacts.set(r.username, name)
  }
  return contacts
}

/**
 * 获取群聊映射（chatroomname -> 显示名），优先 chatroom.displayname，其次 rcontact.nickname
 */
export async function fetchChatrooms(prisma: PrismaClient, contacts: Map<string, string>) {
  const chatroomRows = await prisma.$queryRaw<Array<{ chatroomname: string; displayname: string | null }>>`SELECT chatroomname, displayname FROM chatroom`
  const chatrooms = new Map<string, string>()
  for (const r of chatroomRows) {
    const id = r.chatroomname
    const name = r.displayname || contacts.get(id) || ''
    chatrooms.set(id, name)
  }
  return chatrooms
}