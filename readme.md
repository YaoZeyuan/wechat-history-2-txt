# 微信聊天内容转txt

# 导出微信数据库

可见[无需root的微信聊天记录导出方案_](https://www.yaozeyuan.online/2023/06/03/2023/06/%E6%97%A0%E9%9C%80root%E7%9A%84%E5%BE%AE%E4%BF%A1%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E5%AF%BC%E5%87%BA%E6%96%B9%E6%A1%88/)

# 将微信数据库转为txt

> 感谢trae，6小时搞定全套流程(含debug)

1.  将解密后的微信数据库放在项目目录下, 命名为 `decryption_en_micro_msg.sqlite3`
2.  依次执行以下命令：`pnpm install`(安装必要依赖) / `pnpm prisma`(初始化数据库元信息) / `pnpm export`
3.  在output文件夹中，查看导出的txt文件