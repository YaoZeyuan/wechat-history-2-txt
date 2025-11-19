import fs from "fs";
import path from "path";
import dayjs from "dayjs";

const ms2Ymd = (ms) => {
  return dayjs(ms).format("YYYY-MM-DD HH:mm:ss");
};

// 导出到output中，防止误提交
const outputDir = path.resolve("./output/个人聊天内容导出");
fs.mkdirSync(outputDir, {
  recursive: true,
});
const targetUserNickName = "";
const targetChatroom = "";

const recordListStr = fs
  .readFileSync(path.resolve(`./output/${targetChatroom}/all-record.json`))
  .toString();
const recordList = JSON.parse(recordListStr);
console.log(recordList.length);

const targetRecordList = recordList.filter((item) => {
  return item.nickname === targetUserNickName;
});

console.log(targetRecordList.length);

const line = targetRecordList.map((item) => {
  return `${item.nickname} ${ms2Ymd(item.time)}\n${item.content}\n`;
});

const targetFile = path.resolve(
  outputDir,
  `./${targetChatroom}中_${targetUserNickName}_发言合集.txt`
);

fs.writeFileSync(targetFile, line.join("\n"));
