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

export async function fetchMessageTalkerStats(prisma: PrismaClient) {
  const rawRows = await prisma.$queryRaw<Array<{ talker: string; total: number; minCreateTime: string; maxCreateTime: string }>>`
    SELECT talker, COUNT(1) AS total, CAST(MIN(createTime) AS TEXT) AS minCreateTime, CAST(MAX(createTime) AS TEXT) AS maxCreateTime
    FROM message GROUP BY talker
  `
  return rawRows.map(r => {
    const minSec = Number.parseInt(`${BigInt(r.minCreateTime) / BigInt(1000)}`)
    const maxSec = Number.parseInt(`${BigInt(r.maxCreateTime) / BigInt(1000)}`)
    return {
      talker: r.talker,
      total: Number(r.total as any),
      firstTime: minSec * 1000,
      lastTime: maxSec * 1000,
    }
  })
}
