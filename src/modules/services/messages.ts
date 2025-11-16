import type { PrismaClient } from '@prisma/client'

export type RawMsgRow = { msgSvrId: string; type: number; isSend: number; createTime: number; talker: string; content: any }

/**
 * 查询某会话的全部消息（按 talker 过滤）
 */
export async function fetchMessagesByChat(prisma: PrismaClient, chatId: string) {
  const rawRows = await prisma.$queryRaw<Array<RawMsgRow>>`
    SELECT CAST(msgSvrId AS TEXT) AS msgSvrId, type, isSend, CAST(createTime AS TEXT) as createTime , talker, content
    FROM message WHERE talker = ${chatId}
  `
  const rows = rawRows.map((item: any) => {
    const rawCreateTime = BigInt(item.createTime)
    const createTime = Number.parseInt(`${rawCreateTime / BigInt(1000)}`)
    return {
      ...item,
      createTime: createTime * 1000,
    }
  })
  return rows
}