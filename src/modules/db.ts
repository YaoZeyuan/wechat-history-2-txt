import { PrismaClient } from '@prisma/client'
import * as config from './config'

const dbConfig = config.loadEnvConfig()
console.log("dbConfig.dbPath => ", dbConfig.dbPath)
/**
 * Prisma 客户端实例。全局单例以复用连接。
 */
export const prisma = new PrismaClient({ datasourceUrl: 'file:' + dbConfig.dbPath })