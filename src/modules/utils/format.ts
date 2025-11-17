/**
 * 将毫秒时间戳格式化为 yyyy-MM-dd HH:mm:ss
 */
export function formatDate(tsMs: number): string {
  const d = new Date(tsMs)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  const ss = String(d.getSeconds()).padStart(2, '0')
  return `${y}-${m}-${day} ${hh}:${mm}:${ss}`
}

/**
 * 将毫秒时间戳格式化为 yyyy-MM
 */
export function formatMonth(tsMs: number): string {
  const d = new Date(tsMs)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  return `${y}-${m}`
}

/**
 * 清理文件名非法字符
 */
export function sanitizeFileName(name: string): string {
  return name.replace(/[\\/:*?"<>|]/g, '_')
}

function decodeXmlEntities(s: string): string {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
}

function tryExtractXmlQuote(content: string): string | null {
  const trimmed = content.trim()
  if (!trimmed.startsWith('<?xml')) return null
  if (!/<msg/.test(trimmed)) return null
  if (!/<appmsg/.test(trimmed)) return null
  if (!/<refermsg/.test(trimmed)) return null
  const titleMatch = trimmed.match(/<title>([\s\S]*?)<\/title>/)
  const refMatch = trimmed.match(/<refermsg[\s\S]*?<content>([\s\S]*?)<\/content>[\s\S]*?<\/refermsg>/)
  if (!titleMatch || !refMatch) return null
  const title = decodeXmlEntities(titleMatch[1])
  const ref = decodeXmlEntities(refMatch[1])
  return `${ref}\n-----\n${title}`
}

function tryExtractQuote(content: string): string | null {
  const trimmed = content.trim()
  if (!/<msg/.test(trimmed)) return null
  if (!/<appmsg/.test(trimmed)) return null
  if (!/<refermsg/.test(trimmed)) return null
  const titleMatch = trimmed.match(/<title>([\s\S]*?)<\/title>/)
  let refMatch = trimmed.match(/<refermsg[\s\S]*?<content>([\s\S]*?)<\/content>[\s\S]*?<\/refermsg>/)
  if (refMatch?.includes("<?xml")) {
    refMatch = ['较复杂的引用消息，略过']
  }
  if (!titleMatch || !refMatch) return null
  const title = decodeXmlEntities(titleMatch[1])
  const ref = decodeXmlEntities(refMatch[1])
  return `${ref}\n-----\n${title}`
}

const db: any = {}

/**
 * 消息类型映射为展示内容
 */
export function mapContentByType(type: number, content: string): string {
  switch (type) {
    case 1:
      return content
    case 3:
      return '[图片]'
    case 34:
      return '[语音]'
    case 42:
      return '[服务号名片]'
    case 43:
      return '[视频]'
    case 47:
      return '[表情]'
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
    case 822083633:
      // 引用消息
      return tryExtractQuote(content) ?? content
    case 48:
      return '[位置信息]'
    case 50:
      return '[语音通话]'
    case 62:
      return '[微信名片]'
    case 66:
      return '[微信名片]'
    case 10000:
      return '[微信支付]'
    case 1048625:
    case 16777265:
    case 486539313:
    case 754974769:
    case 805306417:
    case 1040187441:
    case 1107296305:
      return tryExtractXmlQuote(content) ?? content
    case 268445456:
      return content
    case 469762097:
    case 536870961:
    case 570425393:
    case 704643121:
    case 771751985:
    case 922746929:
    case 973078577:
    case 1077936177:
    case -1879048186:
      return tryExtractQuote(content) ?? content
    default:
      db[`${type}`] = content
      console.log(JSON.stringify(db, null, 2))
      return content || '[未知类型]'
  }
}