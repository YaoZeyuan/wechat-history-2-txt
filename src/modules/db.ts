import { PrismaClient } from '@prisma/client'
import { PrismaBetterSQLite3 } from '@prisma/adapter-better-sqlite3';
import * as config from './config.js'
import Database from "better-sqlite3";

const dbConfig = config.loadEnvConfig()
console.log("dbConfig.dbPath => ", dbConfig.dbPath)

const adapter = new PrismaBetterSQLite3({
    url: 'file:' + dbConfig.dbPath
});

/**
 * Prisma 客户端实例。全局单例以复用连接。
 */
export const prisma = new PrismaClient({ adapter })

/**
 * 借助sqlite3直接读库，绕过用prisma读取数据库时，String转换失败的bug
 * @param chatId 
 * @returns 
 */
export function fetchMessagesByChatBySqlite3(chatId: string) {
    // 打开数据库（只读，安全）
    const db = new Database(dbConfig.dbPath, { readonly: true });

    // 读取数据（一次性取全部）
    const rows = db.prepare(`
    SELECT
      msgSvrId,
      type,
      isSend,
      createTime,
      talker,
      content
    FROM message
    WHERE talker = ?
  `).all(chatId);

    db.close(); // 读完立即关闭

    // 处理 content（可能是 TEXT 或 BLOB）
    return rows.map((r: any) => {
        let contentText = "";

        if (r.content == null) {
            contentText = "";
        } else if (Buffer.isBuffer(r.content)) {
            // BLOB → 尝试 UTF-8 解码
            try {
                contentText = r.content.toString("utf-8");
            } catch {
                contentText = "";
            }
        } else {
            // TEXT → String
            contentText = String(r.content);
        }

        return {
            msgSvrId: String(r.msgSvrId),
            type: r.type,
            isSend: r.isSend,
            createTime: String(r.createTime),
            talker: r.talker,
            content: contentText,
        };
    });
}
