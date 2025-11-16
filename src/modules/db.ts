import { PrismaClient } from '@prisma/client'

/**
 * Prisma 客户端实例。全局单例以复用连接。
 */
export const prisma = new PrismaClient()