import fs from "fs";
import path from "path";
import dayjs from "dayjs";

const ms2Ymd = (ms) => {
  return dayjs(ms).format("YYYY-MM-DD HH:mm:ss");
};
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

const targetFile = path.resolve(`./${targetUserNickName}_发言合集.txt`);

fs.writeFileSync(targetFile, line.join("\n"));
