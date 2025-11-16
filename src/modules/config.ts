import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'

const envUrl = path.resolve('.', '.env')
const parsed = dotenv.config({ path: envUrl }).parsed as any

/**
 * 加载 .env 并解析数据库路径与输出目录
 */
export function loadEnvConfig() {
  const rawDbUrl: string = parsed?.DATABASE_URL || './decryption_en_micro_msg.sqlite3'
  const dbPath = path.resolve(rawDbUrl)
  const outDir = path.resolve(process.cwd(), 'output')
  return { dbPath, outDir }
}

/**
 * 校验数据库文件存在性
 */
export function ensureDbFile(dbPath: string) {
  if (!fs.existsSync(dbPath)) {
    throw new Error(`数据库文件未找到: ${dbPath}`)
  }
}

/**
 * 解析导出对象选择：命令行优先，回退到 .env
 * 支持 --uid, --type 或 EXPORT_UIDS, EXPORT_TYPE
 */
export function parseSelectionArgs() {
  const uidArg: string = parsed.EXPORT_UIDS
  const typeArg: string = parsed.EXPORT_TYPE ?? 'all'
  const uids = uidArg ? uidArg.split(',').map(s => s.trim()).filter(Boolean) : []
  return { uids, type: typeArg as 'contact' | 'chatroom' | 'all' }
}