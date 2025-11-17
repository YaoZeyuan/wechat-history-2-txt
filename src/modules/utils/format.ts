import { XMLParser } from 'fast-xml-parser'
import * as TypeConst from './type_const.js'

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
  // todo 解析失败，再看下
  if (refMatch?.includes("xml") || refMatch?.includes("msg")) {
    refMatch = ['较复杂的引用消息，略过']
  }
  if (!titleMatch || !refMatch) return null
  const title = decodeXmlEntities(titleMatch[1])
  const ref = decodeXmlEntities(refMatch[1])
  return `${ref}\n-----\n${title}`
}

const parser = new XMLParser({
  ignoreAttributes: false
})
function getXmlMessageTitle(content: string) {
  const doc = parser.parse(content)
  return doc?.['msg']?.['appmsg']?.['title'] || content
}

function extractXmlContent(content: string, type: number) {
  const doc = parser.parse(content)
  switch (type) {
    case TypeConst.Type_1_文本:
      return content
    case TypeConst.Type_3_图片:
      return "[图片]"
    case TypeConst.Type_34_语音:
    case TypeConst.Type_62_语音消息:
      {
        const msLength = Number.parseInt(content.split(":")[1])
        const second = Math.floor(msLength / 1000)
        return `[语音:${second}s]`
      }
    case TypeConst.Type_42_服务号名片:
      {
        const nickname = doc['msg']['@_nickname']
        return `[服务号名片:${nickname}]`
      }
    case TypeConst.Type_43_视频:
      {
        const msLength = Number.parseInt(content.split(":")[1])
        const second = Math.floor(msLength / 1000)
        return `[视频:${second}s]`
      }
    case TypeConst.Type_47_表情:
      return "[表情]"
    case TypeConst.Type_49_分享卡片:
      {
        const text = doc['msg']['appmsg']['title']
        return `[分享卡片:${text}]`
      }
    case TypeConst.Type_10000_置顶消息:
      {
        const action = content.split("</_wc_custom_link_>\"")[1]
        return `[${doc['_wc_custom_link_']?.['#text'] ?? ""}${action}]`
      }
    case TypeConst.Type_436207665_微信红包:
      return `[微信红包:${doc['msg']['appmsg']['wcpayinfo']['sendertitle']}]`
    case TypeConst.Type_419430449_微信转账:
      return `[微信转账:${doc['msg']['appmsg']['wcpayinfo']['feedesc']}-${doc['msg']['appmsg']['wcpayinfo']['pay_memo']}]`
    case TypeConst.Type_1090519089_文件:
      return `[微信文件:${doc['msg']['appmsg']['title']}]`
    case TypeConst.Type_822083633_引用消息:
      {
        const currentTitle = doc['msg']['appmsg']['title']
        const refferInfo = doc['msg']['appmsg']['refermsg']
        const refferText = getXmlMessageTitle(refferInfo['content'])
        return `${refferText}\n----\n${currentTitle}`
      }
    case TypeConst.Type_48_位置信息:
      return `[位置信息:${doc['msg']['location']['@_poiname']}]`
    case TypeConst.Type_50_语音通话:
      return "[语音通话]"
    case TypeConst.Type_66_微信名片:
      return `[微信名片:${doc['msg']['@_nickname']}]`
    case TypeConst.Type_1048625_xml1:
    case TypeConst.Type_16777265_xml2:
    case TypeConst.Type_486539313_xml3:
      return `[未识别消息:${getXmlMessageTitle(content)}]`
    case TypeConst.Type_754974769_xml4:
      {
        const nickname = doc['msg']['appmsg']['finderFeed']['nickname']
        const desc = doc['msg']['appmsg']['finderFeed']['desc']
        return `[当前微信版本不支持展示该内容，请升级至最新版本: ${nickname} => ${desc}]`
      }
    case TypeConst.Type_805306417_接龙:
      return `${getXmlMessageTitle(content)}`
    case TypeConst.Type_1040187441_歌曲:
      return `[歌曲:${getXmlMessageTitle(content)}]`
    case TypeConst.Type_1107296305_群公告:
    case TypeConst.Type_268445456_撤回消息:
      return content
    case TypeConst.Type_469762097_微信红包:
      return `[微信红包:${doc['msg']['des']}]`
    case TypeConst.Type_536870961_亲属卡:
      return `[亲属卡:${doc['msg']['appmsg']['title']}-${doc['msg']['appmsg']['des']}]`
    case TypeConst.Type_570425393_邀请加入群聊:
      {

        switch (doc["sysmsg"]["@_type"]) {
          case `sysmsgtemplate`: {
            const keyValueList: { key: string, value: string }[] = [];
            const linkValueList =
              doc["sysmsg"]["sysmsgtemplate"]["content_template"]["link_list"][
              "link"
              ];
            for (const item of linkValueList) {
              const key = item["@_name"];
              let value = "";
              if (item?.["memberlist"]?.["member"]?.["nickname"] === undefined) {
                value = item.title;
              } else {
                value = item["memberlist"]["member"]["nickname"];
              }
              keyValueList.push({
                key,
                value,
              });
            }

            const template =
              doc["sysmsg"]["sysmsgtemplate"]["content_template"]["template"];
            let realText = template;
            for (const item of keyValueList) {
              realText = realText.replace(`$${item.key}$`, item.value);
            }
            return realText;
          }
        }
        const name =
          doc["sysmsg"]["sysmsgtemplate"]["content_template"]["link_list"][
          "link"
          ][0]["memberlist"]["nickname"];
        const history =
          doc["sysmsg"]["sysmsgtemplate"]["content_template"]["link_list"][
          "link"
          ][2]["title"];
        const template =
          doc["sysmsg"]["sysmsgtemplate"]["content_template"]["template"];
        const realText = template
          .replace("$names$", name)
          .replace("$history$", history)
          .replace("$revoke$", "");
        return realText;
      }
    case TypeConst.Type_704643121_待接收转账:
      return "[你有一笔待接收的转账]"
    case TypeConst.Type_771751985_不支持的内容:
    case TypeConst.Type_922746929_不支持的内容:
      return `[当前微信版本不支持展示该内容，请升级至最新版本]`
      return ""
    case TypeConst.Type_973078577_直播卡片:
      return `[直播卡片-${doc['msg']['appmsg']['finderLive']['nickname']}:${doc['msg']['appmsg']['finderLive']['desc']}]`
    case TypeConst.Type_1077936177_音乐卡片:
      return `音乐卡片: ${doc['msg']['appmsg']['TPMediaInfoDesc']['songName']}`
    case TypeConst.Type_1879048186_位置共享:
      return "[位置共享]"
    default:
      return content || '未知内容'
  }


}

const db: Record<string, string> = {}

export function getContentTypeDemo() {
  return { ...db }
}

/**
 * 消息类型映射为展示内容
 */
export function mapContentByType(type: number, content: string): string {
  if (content && content.length > 0) {
    db[type] = content
  }
  return extractXmlContent(content, type)
}