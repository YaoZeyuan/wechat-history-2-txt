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
    case 43:
      return '[视频]'
    case 47:
      return '[大表情]'
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
    default:
      return content || '[未知类型]'
  }
}