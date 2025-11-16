import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'

/**
 * 加载 .env 并解析数据库路径与输出目录
 */
export function loadEnvConfig() {
  const envUrl = path.resolve('.', '.env')
  const parsed = dotenv.config({ path: envUrl }).parsed as any
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