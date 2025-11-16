import type { PrismaClient } from '@prisma/client'

export type RawMsgRow = { msgSvrId: string; type: number; isSend: number; createTime: number; talker: string; content: any }

/**
 * 查询某会话的全部消息（按 talker 过滤）
 */
export async function fetchMessagesByChat(prisma: PrismaClient, chatId: string) {
  const rows = await prisma.$queryRaw<Array<RawMsgRow>>`
    SELECT msgSvrId, type, isSend, createTime, talker, content FROM message WHERE talker = ${chatId}
  `
  return rows
}