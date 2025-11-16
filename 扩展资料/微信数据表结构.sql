-- AAPayRecord definition

CREATE TABLE AAPayRecord (  payMsgId TEXT PRIMARY KEY ,  insertmsg INTEGER,  chatroom TEXT,  msgId LONG);


-- AARecord definition

CREATE TABLE AARecord (  billNo TEXT PRIMARY KEY ,  insertmsg INTEGER,  localMsgId LONG,  status INTEGER default '-1' );


-- ABTestInfo definition

CREATE TABLE ABTestInfo (  abtestkey TEXT PRIMARY KEY ,  value TEXT,  expId TEXT,  sequence LONG,  prioritylevel INTEGER,  startTime LONG,  endTime LONG,  noReport INTEGER);


-- ABTestItem definition

CREATE TABLE ABTestItem (  layerId TEXT PRIMARY KEY ,  business TEXT,  expId TEXT,  sequence LONG,  prioritylevel INTEGER default '0' ,  startTime LONG,  endTime LONG,  needReport INTEGER,  rawXML TEXT default '' );


-- ActiveInfo definition

CREATE TABLE ActiveInfo (  key INTEGER PRIMARY KEY  COLLATE NOCASE ,  mau INTEGER,  dau INTEGER,  useTime LONG);


-- AddContactAntispamTicket definition

CREATE TABLE AddContactAntispamTicket (  userName TEXT,  scene INTEGER,  ticket TEXT);


-- addr_upload2 definition

CREATE TABLE addr_upload2 ( id int  PRIMARY KEY , md5 text  , peopleid text  , uploadtime long  , realname text  , realnamepyinitial text  , realnamequanpin text  , username text  , nickname text  , nicknamepyinitial text  , nicknamequanpin text  , type int  , moblie text  , email text  , status int  , reserved1 text  , reserved2 text  , reserved3 int  , reserved4 int , lvbuf BLOG , showhead int  );

CREATE INDEX upload_time_index ON addr_upload2 ( uploadtime );
CREATE INDEX addr_upload_user_index ON addr_upload2 ( username );


-- ApkChannelPatchInfo definition

CREATE TABLE ApkChannelPatchInfo (  pkgName TEXT PRIMARY KEY ,  isServerPatch INTEGER default 'false' ,  patchPath TEXT,  newChannelApkPath TEXT,  taskStatus INTEGER,  appId TEXT,  scene INTEGER,  ssid INTEGER,  uiarea INTEGER,  noticeId INTEGER,  extInfo TEXT,  userSessionId TEXT,  startTime LONG);


-- appattach definition

CREATE TABLE appattach (  appId TEXT,  sdkVer LONG,  mediaSvrId TEXT,  mediaId TEXT,  clientAppDataId TEXT,  type LONG,  totalLen LONG,  offset LONG,  status LONG,  isUpload INTEGER,  createTime LONG,  lastModifyTime LONG,  fileFullPath TEXT,  fullXml TEXT,  msgInfoId LONG,  netTimes LONG,  isUseCdn INTEGER,  signature TEXT,  fakeAeskey TEXT,  fakeSignature TEXT, msgInfoTalker TEXT);

CREATE INDEX msgInfoIdIndex ON appattach ( msgInfoId );
CREATE INDEX appattach_statusIndex ON appattach ( status );


-- appbrandmessage definition

CREATE TABLE appbrandmessage ( msgId INTEGER PRIMARY KEY, msgSvrId INTEGER , type INT, status INT, isSend INT, isShowTimer INTEGER, createTime INTEGER, talker TEXT, content TEXT, imgPath TEXT, reserved TEXT, lvbuffer BLOB, transContent TEXT, transBrandWording TEXT , talkerId INTEGER, bizClientMsgId TEXT, bizChatId INTEGER DEFAULT -1, bizChatUserId TEXT, msgSeq INTEGER, flag INT DEFAULT 0, solitaireFoldInfo BLOB, historyId TEXT);

CREATE INDEX appbrandmessageSvrIdIndex ON appbrandmessage ( msgSvrId );
CREATE INDEX appbrandmessageTalkerIndex ON appbrandmessage ( talker );
CREATE INDEX appbrandmessageTalerStatusIndex ON appbrandmessage ( talker,status );
CREATE INDEX appbrandmessageCreateTimeIndex ON appbrandmessage ( createTime );
CREATE INDEX appbrandmessageCreateTaklerTimeIndex ON appbrandmessage ( talker,createTime );
CREATE INDEX appbrandmessageSendCreateTimeIndex ON appbrandmessage ( status,isSend,createTime );
CREATE INDEX appbrandmessageTalkerTypeIndex ON appbrandmessage ( talker,type );


-- appbrandnotifymessage definition

CREATE TABLE appbrandnotifymessage ( msgId INTEGER PRIMARY KEY, msgSvrId INTEGER , type INT, status INT, isSend INT, isShowTimer INTEGER, createTime INTEGER, talker TEXT, content TEXT, imgPath TEXT, reserved TEXT, lvbuffer BLOB, transContent TEXT, transBrandWording TEXT , talkerId INTEGER, bizClientMsgId TEXT, bizChatId INTEGER DEFAULT -1, bizChatUserId TEXT, msgSeq INTEGER, flag INT DEFAULT 0, solitaireFoldInfo BLOB, historyId TEXT);

CREATE INDEX appbrandnotifymessageSvrIdIndex ON appbrandnotifymessage ( msgSvrId );
CREATE INDEX appbrandnotifymessageTalkerIndex ON appbrandnotifymessage ( talker );
CREATE INDEX appbrandnotifymessageTalerStatusIndex ON appbrandnotifymessage ( talker,status );
CREATE INDEX appbrandnotifymessageCreateTimeIndex ON appbrandnotifymessage ( createTime );
CREATE INDEX appbrandnotifymessageCreateTaklerTimeIndex ON appbrandnotifymessage ( talker,createTime );
CREATE INDEX appbrandnotifymessageSendCreateTimeIndex ON appbrandnotifymessage ( status,isSend,createTime );
CREATE INDEX appbrandnotifymessageTalkerTypeIndex ON appbrandnotifymessage ( talker,type );


-- AppInfo definition

CREATE TABLE AppInfo (  appId TEXT default ''  PRIMARY KEY ,  appName TEXT,  appDiscription TEXT,  appIconUrl TEXT,  appStoreUrl TEXT,  appVersion INTEGER,  appWatermarkUrl TEXT,  packageName TEXT,  status INTEGER,  signature TEXT,  modifyTime LONG,  appName_en TEXT,  appName_tw TEXT,  appName_hk TEXT,  appDiscription_en TEXT,  appDiscription_tw TEXT,  appType TEXT,  openId TEXT,  authFlag INTEGER,  appInfoFlag INTEGER default '-1' ,  lvbuff BLOB,  serviceAppType INTEGER default '0' ,  serviceAppInfoFlag INTEGER default '0' ,  serviceShowFlag INTEGER default '0' ,  appSupportContentType LONG default '0' ,  svrAppSupportContentType LONG default '0' , packageInfos TEXT);

CREATE INDEX appInfo_status_Index ON AppInfo(status);


-- AppMessage definition

CREATE TABLE AppMessage (  msgId LONG default '0'  PRIMARY KEY ,  xml TEXT,  appId TEXT,  title TEXT,  description TEXT,  source TEXT,  type INTEGER, msgSvrId LONG, msgTalker TEXT);


-- AppSort definition

CREATE TABLE AppSort (  flag LONG default '0' ,  appId TEXT default '' ,  sortId INTEGER default '0' );


-- BackupMoveTime definition

CREATE TABLE BackupMoveTime (  deviceId TEXT default '' ,  sessionName TEXT default '' ,  moveTime BLOB default '' );


-- BackupRecoverMsgListDataId definition

CREATE TABLE BackupRecoverMsgListDataId (  msgListDataId TEXT PRIMARY KEY ,  sessionName TEXT default '' );


-- BackupTempMoveTime definition

CREATE TABLE BackupTempMoveTime (  sessionName TEXT default '' ,  startTime LONG default '0' ,  endTime LONG default '0' );


-- BizAdInfo definition

CREATE TABLE BizAdInfo (  aId TEXT PRIMARY KEY ,  msgId LONG,  exposeTime LONG);

CREATE INDEX biz_exposeTime_index ON BizAdInfo ( exposeTime );


-- BizAppMsgReportContext definition

CREATE TABLE BizAppMsgReportContext (  appMsgReportContextId LONG PRIMARY KEY ,  url TEXT,  reportTime LONG,  aScene INTEGER);


-- BizBlockFinderInfo definition

CREATE TABLE BizBlockFinderInfo (  bizUsername TEXT PRIMARY KEY ,  finderUsername TEXT);


-- BizChatConversation definition

CREATE TABLE BizChatConversation (  bizChatId LONG PRIMARY KEY ,  brandUserName TEXT,  unReadCount INTEGER,  newUnReadCount INTEGER,  lastMsgID LONG,  lastMsgTime LONG,  content TEXT,  digest TEXT default '' ,  digestUser TEXT default '' ,  atCount INTEGER default '0' ,  editingMsg TEXT,  chatType INTEGER,  status INTEGER default '0' ,  isSend INTEGER default '0' ,  msgType TEXT default '' ,  msgCount INTEGER default '0' ,  flag LONG default '0' ,  atAll INTEGER default '0' );

CREATE INDEX BizChatConv_bizChatIdIndex ON BizChatConversation ( bizChatId );
CREATE INDEX BizChatConv_brandUserNameIndex ON BizChatConversation ( brandUserName );
CREATE INDEX unreadCountIndex ON BizChatConversation ( unReadCount );


-- BizChatInfo definition

CREATE TABLE BizChatInfo (  bizChatLocalId LONG PRIMARY KEY ,  bizChatServId TEXT,  brandUserName TEXT default '' ,  chatType INTEGER,  headImageUrl TEXT,  chatName TEXT default '' ,  chatNamePY TEXT default '' ,  chatVersion INTEGER default '-1' ,  needToUpdate INTEGER default 'true' ,  bitFlag INTEGER default '0' ,  maxMemberCnt INTEGER default '0' ,  ownerUserId TEXT,  userList TEXT,  addMemberUrl TEXT,  roomflag INTEGER default '0' );

CREATE INDEX bizChatLocalIdIndex ON BizChatInfo ( bizChatLocalId );
CREATE INDEX bizChatIdIndex ON BizChatInfo ( bizChatServId );
CREATE INDEX brandUserNameIndex ON BizChatInfo ( brandUserName );


-- bizchatmessage definition

CREATE TABLE bizchatmessage ( msgId INTEGER PRIMARY KEY, msgSvrId INTEGER , type INT, status INT, isSend INT, isShowTimer INTEGER, createTime INTEGER, talker TEXT, content TEXT, imgPath TEXT, reserved TEXT, lvbuffer BLOB, transContent TEXT, transBrandWording TEXT, bizChatId INTEGER DEFAULT -1, bizChatUserId TEXT , talkerId INTEGER, bizClientMsgId TEXT, msgSeq INTEGER, flag INT DEFAULT 0, solitaireFoldInfo BLOB, historyId TEXT);

CREATE INDEX bizmessageChatIdIndex ON bizchatmessage ( bizChatId );
CREATE INDEX bizmessageSvrIdIndex ON bizchatmessage ( msgSvrId );
CREATE INDEX bizmessageTalkerIndex ON bizchatmessage ( talker );
CREATE INDEX bizmessageTalerStatusIndex ON bizchatmessage ( talker,status );
CREATE INDEX bizmessageCreateTimeIndex ON bizchatmessage ( createTime );
CREATE INDEX bizmessageCreateTaklerTimeIndex ON bizchatmessage ( talker,createTime );
CREATE INDEX bizmessageBizChatIdTypeCreateTimeIndex ON bizchatmessage ( bizChatId,type,createTime );
CREATE INDEX bizmessageSendCreateTimeIndex ON bizchatmessage ( status,isSend,createTime );
CREATE INDEX bizchatmessageTalkerTypeIndex ON bizchatmessage ( talker,type );
CREATE INDEX bizchatmessageTalkerClientMsgIdIndex ON bizchatmessage ( talker,bizClientMsgId );


-- BizChatMyUserInfo definition

CREATE TABLE BizChatMyUserInfo (  brandUserName TEXT PRIMARY KEY ,  userId TEXT);

CREATE INDEX bizChatbrandUserNameIndex ON BizChatMyUserInfo ( brandUserName );


-- BizChatUserInfo definition

CREATE TABLE BizChatUserInfo (  userId TEXT PRIMARY KEY ,  userName TEXT default '' ,  userNamePY TEXT default '' ,  brandUserName TEXT default '' ,  UserVersion INTEGER default '-1' ,  needToUpdate INTEGER default 'true' ,  headImageUrl TEXT,  profileUrl TEXT,  bitFlag INTEGER default '0' ,  addMemberUrl TEXT);

CREATE INDEX bizUserIdIndex ON BizChatUserInfo ( userId );


-- BizEnterprise definition

CREATE TABLE BizEnterprise (  userName TEXT PRIMARY KEY ,  qyUin INTEGER,  userUin INTEGER,  userFlag INTEGER,  wwExposeTimes INTEGER,  wwMaxExposeTimes INTEGER,  wwCorpId LONG,  wwUserVid LONG,  userType INTEGER,  chatOpen INTEGER,  wwUnreadCnt INTEGER default '0' ,  show_confirm INTEGER,  use_preset_banner_tips INTEGER,  hide_create_chat INTEGER,  hide_mod_chat_member INTEGER,  hide_colleage_invite INTEGER default 'true' ,  raw_attrs BLOB);

CREATE INDEX BizEnterpriseUserNameIndex ON BizEnterprise ( userName );


-- bizfans_img_info_table definition

CREATE TABLE bizfans_img_info_table ( id INTEGER PRIMARY KEY, msgSvrId LONG, offset INT, totalLen INT, bigImgPath TEXT, thumbImgPath TEXT, createtime INT, msglocalid INT, status INT, nettimes INT, reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text, hashdthumb int DEFAULT 0, iscomplete INT DEFAULT 1, origImgMD5 TEXT, compressType INT DEFAULT 0, midImgPath TEXT, forwardType INT DEFAULT 0, hevcPath TEXT, sendImgType INT DEFAULT 0 , originSourceMd5 TEXT, msgTalker TEXT);

CREATE INDEX bizfans_img_info_tableserverImgInfoIndex ON bizfans_img_info_table ( msgSvrId );
CREATE INDEX bizfans_img_info_tableserverImgInfoHdIndex ON bizfans_img_info_table ( reserved1 );
CREATE INDEX bizfans_img_info_tablemsgLocalIdIndex ON bizfans_img_info_table ( msglocalid );
CREATE INDEX bizfans_img_info_tableiscomplete_index ON bizfans_img_info_table ( iscomplete );
CREATE INDEX bizfans_img_info_tableorigImgMD5_index ON bizfans_img_info_table ( origImgMD5 );


-- bizfansmessage definition

CREATE TABLE bizfansmessage (  msgId LONG PRIMARY KEY ,  msgSvrId LONG,  type INTEGER,  status INTEGER,  isSend INTEGER,  isShowTimer INTEGER,  createTime LONG,  talker TEXT,  content TEXT default '' ,  imgPath TEXT,  reserved TEXT,  lvbuffer BLOB,  talkerId INTEGER,  transContent TEXT default '' ,  transBrandWording TEXT default '' ,  bizClientMsgId TEXT default '' ,  bizChatId LONG default '-1' ,  bizChatUserId TEXT default '' ,  msgSeq LONG,  flag INTEGER default '0' ,  fromUsername TEXT,  toUsername TEXT,  extInfo BLOB, solitaireFoldInfo BLOB, historyId TEXT);

CREATE INDEX bizfansmessageSvrIdIndex ON bizfansmessage ( msgSvrId );
CREATE INDEX bizfansmessageTalkerIndex ON bizfansmessage ( talker );
CREATE INDEX bizfansmessageTalkerStatusIndex ON bizfansmessage ( talker,status );
CREATE INDEX bizfansmessageCreateTimeIndex ON bizfansmessage ( createTime );
CREATE INDEX bizfansmessageCreateTalkerTimeIndex ON bizfansmessage ( talker,createTime );
CREATE INDEX bizfansmessageSendCreateTimeIndex ON bizfansmessage ( status,isSend,createTime );
CREATE INDEX bizfansmessageTalkerTypeIndex ON bizfansmessage ( talker,type );


-- bizfansvideoinfo definition

CREATE TABLE bizfansvideoinfo ( filename text  PRIMARY KEY , clientid text  , msgsvrid int  , netoffset int  , filenowsize int  , totallen int  , thumbnetoffset int  , thumblen int  , status int  , createtime long  , lastmodifytime long  , downloadtime long  , videolength int  , msglocalid int  , nettimes int  , cameratype int  , user text  , human text  , reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text  , videofuncflag int ,masssendid long ,masssendlist text,videomd5 text, streamvideo byte[], statextstr text, downloadscene int, mmsightextinfo byte[], preloadsize int, videoformat int, forward_msg_local_id int,msg_uuid text, share_app_info text, origin_file_name text, had_clicked_video int, media_id text, media_flag text, video_path text, media_cdnid text, video_wxa_info BLOB, weapp_source_username text, msg_talker text, forward_msg_talker text);

CREATE INDEX bizfansvideoinfovideo_status_index ON bizfansvideoinfo ( status,downloadtime );
CREATE INDEX bizfansvideoinfomassSendIdIndex ON bizfansvideoinfo ( masssendid );
CREATE INDEX bizfansvideoinfoLastModifyTimeIndex ON bizfansvideoinfo ( lastmodifytime );
CREATE INDEX bizfansvideoinfo_MediaIdIndex ON bizfansvideoinfo ( media_id  );


-- bizfansvideoinfoVideoHash definition

CREATE TABLE bizfansvideoinfoVideoHash  (size int , CreateTime long, hash text ,  cdnxml text, orgpath text);


-- BizFollowedContactDigest definition

CREATE TABLE BizFollowedContactDigest (  bizUsername TEXT default ''  PRIMARY KEY ,  updateTime LONG default '0' ,  digest TEXT default '' );

CREATE INDEX BizFansConversation_updateTime_index ON BizFollowedContactDigest(updateTime);


-- bizinfo definition

CREATE TABLE bizinfo (  username TEXT PRIMARY KEY ,  appId TEXT,  brandList TEXT default '' ,  brandListVersion TEXT,  brandListContent TEXT,  brandFlag INTEGER,  extInfo TEXT,  brandInfo TEXT,  brandIconURL TEXT,  updateTime LONG,  hadAlert INTEGER,  acceptType INTEGER default '0' ,  type INTEGER default '0' ,  status INTEGER default '0' ,  enterpriseFather TEXT,  kfWorkerId TEXT,  specialType INTEGER,  attrSyncVersion TEXT,  incrementUpdateTime LONG,  bitFlag INTEGER default '0' );

CREATE INDEX type_username_index ON bizinfo ( type,username );
CREATE INDEX username_acceptType_index ON bizinfo ( username,acceptType );


-- BizKF definition

CREATE TABLE BizKF (  openId TEXT PRIMARY KEY ,  brandUsername TEXT default '' ,  headImgUrl TEXT,  nickname TEXT,  kfType INTEGER,  updateTime LONG);

CREATE INDEX BizKFAppIdUsernameIndex ON BizKF ( brandUsername );
CREATE INDEX BizKFOpenIdIndex ON BizKF ( openId );


-- BizRecExposeInfo definition

CREATE TABLE BizRecExposeInfo (  exposeId TEXT PRIMARY KEY ,  msgId LONG,  exposeTime LONG,  exposeType INTEGER);

CREATE INDEX biz_rec_exposeTime_type_index ON BizRecExposeInfo (exposeTime,exposeType);


-- BizScreenshotInfo definition

CREATE TABLE BizScreenshotInfo (  screenshotMd5 TEXT PRIMARY KEY ,  screenshotPath TEXT,  url TEXT,  screenshotTime LONG,  biz LONG,  mid LONG,  idx LONG,  itemShowType INTEGER);


-- BizTimeLineInfo definition

CREATE TABLE BizTimeLineInfo (  msgId LONG PRIMARY KEY ,  msgSvrId LONG,  type INTEGER,  status INTEGER,  createTime LONG,  talker TEXT,  content TEXT default '' ,  imgPath TEXT,  lvbuffer BLOB,  talkerId INTEGER,  isExpand INTEGER,  orderFlag LONG default '0' ,  hasShow INTEGER default '1' ,  placeTop INTEGER default '1' ,  appMsgStatInfoProto BLOB,  isRead INTEGER default '0' ,  bitFlag INTEGER default '0' ,  bizClientMsgId TEXT default '' ,  rankSessionId TEXT default '' ,  recommendCardId TEXT default '' ,  isValidExposed INTEGER,  resortBuffer TEXT default '' ,  recycleCardType INTEGER default '0' ,  recommendReason TEXT default '' );


-- BizTimeLineSingleMsgInfo definition

CREATE TABLE BizTimeLineSingleMsgInfo (  msgId LONG PRIMARY KEY ,  msgSvrId LONG,  type INTEGER,  status INTEGER,  createTime LONG,  talker TEXT,  content TEXT default '' ,  imgPath TEXT,  lvbuffer BLOB,  talkerId INTEGER,  isExpand INTEGER,  orderFlag LONG default '0' ,  hasShow INTEGER default '1' ,  placeTop INTEGER default '1' ,  appMsgStatInfoProto BLOB,  isRead INTEGER default '0' ,  bitFlag INTEGER default '0' ,  bizClientMsgId TEXT default '' ,  rankSessionId TEXT default '' ,  recommendCardId TEXT default '' ,  isValidExposed INTEGER,  resortBuffer TEXT default '' ,  recycleCardType INTEGER default '0' ,  recommendReason TEXT default '' , originBitFlag INTEGER default '0', notifyMsgId TEXT default '', mergeCount INTEGER default '0', mergeShowTime LONG);

CREATE INDEX msg_svr_id_index ON BizTimeLineSingleMsgInfo ( msgSvrId );
CREATE INDEX talker_index ON BizTimeLineSingleMsgInfo ( talker );
CREATE INDEX create_time_index ON BizTimeLineSingleMsgInfo ( createTime );
CREATE INDEX status_talker_index ON BizTimeLineSingleMsgInfo ( status,talker );
CREATE INDEX status_talker_id_index ON BizTimeLineSingleMsgInfo ( status,talkerId );
CREATE INDEX status_create_time_index ON BizTimeLineSingleMsgInfo ( status,createTime );
CREATE INDEX type_order_flag_index ON BizTimeLineSingleMsgInfo ( type,orderFlag );


-- bottlecontact definition

CREATE TABLE bottlecontact (  username TEXT default ''  PRIMARY KEY ,  alias TEXT default '' ,  conRemark TEXT default '' ,  domainList TEXT default '' ,  nickname TEXT default '' ,  pyInitial TEXT default '' ,  quanPin TEXT default '' ,  showHead INTEGER default '0' ,  type INTEGER default '0' ,  uiType LONG default '0' ,  weiboFlag INTEGER default '0' ,  weiboNickname TEXT default '' ,  conRemarkPYFull TEXT default '' ,  conRemarkPYShort TEXT default '' ,  lvbuff BLOB,  verifyFlag INTEGER default '0' ,  encryptUsername TEXT default '' ,  chatroomFlag INTEGER,  deleteFlag INTEGER default '0' ,  contactLabelIds TEXT default '' ,  descWordingId TEXT default '' ,  openImAppid TEXT,  sourceExtInfo TEXT,  ticket TEXT default '' ,  usernameFlag LONG default '0' ,  contactExtra BLOB, createTime LONG default '0');

CREATE UNIQUE INDEX bottle_username_unique_index ON bottlecontact ( username );


-- bottleconversation definition

CREATE TABLE bottleconversation ( unReadCount INTEGER, status INT, isSend INT, createTime LONG, username VARCHAR(40), content TEXT, reserved TEXT );


-- bottlemessage definition

CREATE TABLE bottlemessage ( msgId INTEGER PRIMARY KEY, msgSvrId INTEGER , type INT, status INT, isSend INT, isShowTimer INTEGER, createTime INTEGER, talker TEXT, content TEXT, imgPath TEXT, reserved TEXT, lvbuffer BLOB, transContent TEXT, transBrandWording TEXT , talkerId INTEGER, bizClientMsgId TEXT, bizChatId INTEGER DEFAULT -1, bizChatUserId TEXT, msgSeq INTEGER, flag INT DEFAULT 0, solitaireFoldInfo BLOB, historyId TEXT);

CREATE INDEX bmessageSvrIdIndex ON bottlemessage ( msgSvrId );
CREATE INDEX bmessageTalkerIndex ON bottlemessage ( talker );
CREATE INDEX bmessageTalerStatusIndex ON bottlemessage ( talker,status );
CREATE INDEX bmessageCreateTimeIndex ON bottlemessage ( createTime );
CREATE INDEX bmessageCreateTaklerTimeIndex ON bottlemessage ( talker,createTime );
CREATE INDEX bmessageSendCreateTimeIndex ON bottlemessage ( status,isSend,createTime );
CREATE INDEX bottlemessageTalkerTypeIndex ON bottlemessage ( talker,type );


-- CardMsgInfo definition

CREATE TABLE CardMsgInfo (  card_type INTEGER,  title TEXT,  description TEXT,  logo_url TEXT,  time INTEGER,  card_id TEXT,  card_tp_id TEXT,  msg_id TEXT PRIMARY KEY ,  msg_type INTEGER,  jump_type INTEGER,  url TEXT,  buttonData BLOB,  operData BLOB,  report_scene INTEGER,  read_state INTEGER default '0' ,  accept_buttons TEXT,  consumed_box_id TEXT,  jump_buttons TEXT,  logo_color TEXT,  unavailable_qr_code_list TEXT,  all_unavailable INTEGER default 'false' ,  need_pull_card_entrance INTEGER default 'false' );


-- CardQrCodeConfi definition

CREATE TABLE CardQrCodeConfi (  card_id TEXT PRIMARY KEY ,  lower_bound INTEGER,  need_insert_show_timestamp INTEGER default 'false' ,  show_timestamp_encrypt_key TEXT,  expire_time_interval INTEGER,  show_expire_interval INTEGER,  fetch_time LONG);


-- CardQrCodeDataInfo definition

CREATE TABLE CardQrCodeDataInfo (  code_id TEXT,  card_id TEXT,  code TEXT,  status INTEGER);


-- CdnDownloadInfo definition

CREATE TABLE CdnDownloadInfo (  mediaId TEXT,  downloadUrlHashCode INTEGER PRIMARY KEY ,  downloadUrl TEXT,  httpsUrl TEXT,  filePath TEXT,  verifyHeaders TEXT,  game_package_download INTEGER,  allowMobileNetDownload INTEGER,  wifiAutoDownload INTEGER);


-- ChatBotConfig definition

CREATE TABLE ChatBotConfig (  userName TEXT PRIMARY KEY ,  menu TEXT,  profileInfoDetail TEXT,  serviceAgreement TEXT,  toolbarFlag LONG,  InteractiveMode INTEGER, openIMDescId TEXT, openIMCustomInfo TEXT, openIMId TEXT);


-- chatroom definition

CREATE TABLE chatroom (  chatroomname TEXT default ''  PRIMARY KEY ,  addtime LONG,  memberlist TEXT,  displayname TEXT,  chatroomnick TEXT,  roomflag INTEGER,  roomowner TEXT,  roomdata BLOB,  isShowname INTEGER,  selfDisplayName TEXT,  style INTEGER,  chatroomdataflag INTEGER,  modifytime LONG,  chatroomnotice TEXT,  xmlChatroomnotice TEXT,  chatroomVersion INTEGER,  chatroomnoticeEditor TEXT,  chatroomnoticePublishTime LONG,  chatroomNoticeNew INTEGER,  chatroomLocalVersion LONG,  chatroomStatus INTEGER default '0' ,  memberCount INTEGER default '-1' ,  chatroomfamilystatusmodifytime LONG default '0' ,  associateOpenIMRoomName TEXT,  openIMRoomMigrateStatus INTEGER default '0' ,  saveByteVersion TEXT,  handleByteVersion TEXT,  roomInfoDetailResByte BLOB,  oldChatroomVersion INTEGER,  localChatRoomWatchMembers BLOB,  spamStatus INTEGER default '0' ,  compactFlag LONG default '0' );

CREATE INDEX serverChatRoomUserIndex ON chatroom ( chatroomname );


-- ChatroomMsgSeq definition

CREATE TABLE ChatroomMsgSeq (  username TEXT default ''  PRIMARY KEY ,  lastPushSeq LONG,  lastLocalSeq LONG,  lastPushCreateTime LONG,  lastLocalCreateTime LONG,  seqBlockInfo BLOB);

CREATE INDEX ChatroomMsgSeqTalkerIndex ON ChatroomMsgSeq ( username );


-- ChatroomNoticeAttachIndex definition

CREATE TABLE ChatroomNoticeAttachIndex (  msgId LONG,  dataId TEXT,  dataPath TEXT,  thumbPath TEXT,  size LONG);


-- chattingbginfo definition

CREATE TABLE chattingbginfo ( username text  PRIMARY KEY , bgflag int  , path text  , reserved1 text  , reserved2 text  , reserved3 int  , reserved4 int  );


-- CleanDeleteItem definition

CREATE TABLE CleanDeleteItem (  createTime LONG default '0' ,  modifyTime LONG default '0' ,  deleteTime LONG default '0' ,  id TEXT default '' ,  saveTime LONG default '0' ,  size LONG default '0' ,  flags LONG default '0' );

CREATE INDEX ID ON CleanDeleteItem ( id );


-- contact definition

CREATE TABLE contact ( contactID INTEGER PRIMARY KEY, sex INT, type INT, showHead INT, username VARCHAR(40), nickname VARCHAR(40), pyInitial VARCHAR(40), quanPin VARCHAR(60), reserved TEXT );


-- contact_ext definition

CREATE TABLE contact_ext ( username VARCHAR(40), Uin INTEGER DEFAULT 0, Email VARCHAR(128), Mobile VARCHAR(40), ShowFlag INTEGER DEFAULT 0 , ConType INTEGER DEFAULT 0 , ConRemark TEXT, ConRemark_PYShort TEXT, ConRemark_PYFull TEXT, ConQQMBlog TEXT, ConSMBlog TEXT, DomainList TEXT, reserved1 INT DEFAULT 0 , reserved2 INT DEFAULT 0 , reserved3 INT DEFAULT 0 , reserved4 INT DEFAULT 0 , reserved5 INT DEFAULT 0 , reserved6 TEXT, reserved7 TEXT, reserved8 TEXT, reserved9 TEXT, reserved10 TEXT, weiboflag  INT DEFAULT 0 ,weibonickname TEXT  );


-- ContactCmdBuf definition

CREATE TABLE ContactCmdBuf (  username TEXT default ''  PRIMARY KEY ,  cmdbuf BLOB default '' );


-- ContactLabel definition

CREATE TABLE ContactLabel (  labelID INTEGER PRIMARY KEY ,  labelName TEXT,  labelPYFull TEXT,  labelPYShort TEXT,  createTime LONG,  isTemporary INTEGER, lastUseTime LONG);

CREATE INDEX contact_label_createtime_index ON ContactLabel ( createTime );


-- ContactLabelCache definition

CREATE TABLE ContactLabelCache (  labelId TEXT,  contactName TEXT);


-- conversation definition

CREATE TABLE conversation ( unReadCount INTEGER, status INT, isSend INT, createTime LONG, username VARCHAR(40), content TEXT, reserved TEXT );


-- DelayTransferRecord definition

CREATE TABLE DelayTransferRecord (  msgId LONG PRIMARY KEY ,  transferId TEXT);


-- DeletedConversationInfo definition

CREATE TABLE DeletedConversationInfo ( userName TEXT  PRIMARY KEY , lastSeq LONG  , reserved1 INT  , reserved2 LONG  , reserved3 TEXT  );

CREATE INDEX createTimeIndex  ON DeletedConversationInfo ( reserved2 );


-- DownloadTaskItem definition

CREATE TABLE DownloadTaskItem (  appId TEXT PRIMARY KEY ,  status INTEGER,  modifyTime LONG);


-- EmojiDesignerProduct definition

CREATE TABLE EmojiDesignerProduct (  designerUin INTEGER,  productId TEXT,  syncTime INTEGER);


-- EmojiGroupInfo definition

CREATE TABLE EmojiGroupInfo (  productID TEXT PRIMARY KEY  COLLATE NOCASE ,  packIconUrl TEXT,  packGrayIconUrl TEXT,  packCoverUrl TEXT,  packName TEXT,  packDesc TEXT,  packAuthInfo TEXT,  packPrice TEXT,  packType INTEGER,  packFlag INTEGER,  packExpire LONG,  packTimeStamp LONG,  packCopyright TEXT,  type INTEGER,  status INTEGER,  sort INTEGER default '1' ,  lastUseTime LONG,  packStatus INTEGER default '0' ,  flag INTEGER default '0' ,  recommand INTEGER default '0' ,  sync INTEGER default '0' ,  idx INTEGER default '0' ,  BigIconUrl TEXT,  MutiLanName TEXT,  recommandType INTEGER default '-1' ,  lang TEXT,  recommandWord TEXT,  buttonType INTEGER,  count INTEGER,  ipKey TEXT);


-- EmojiInfo definition

CREATE TABLE EmojiInfo (  md5 TEXT PRIMARY KEY  COLLATE NOCASE ,  svrid TEXT,  catalog INTEGER,  type INTEGER,  size INTEGER,  start INTEGER,  state INTEGER,  name TEXT,  content TEXT,  reserved1 TEXT,  reserved2 TEXT,  reserved3 INTEGER,  reserved4 INTEGER,  app_id TEXT,  groupId TEXT default '' ,  lastUseTime LONG,  framesInfo TEXT default '' ,  idx INTEGER default '0' ,  temp INTEGER default '0' ,  source INTEGER default '0' ,  needupload INTEGER default '0' ,  designerID TEXT,  thumbUrl TEXT,  cdnUrl TEXT,  encrypturl TEXT,  aeskey TEXT,  width INTEGER default '0' ,  height INTEGER default '0' ,  externUrl TEXT,  externMd5 TEXT,  activityid TEXT,  tpurl TEXT,  tpauthkey TEXT,  wxamMd5 TEXT,  attachedText TEXT,  captureStatus INTEGER default '0' ,  attachedEmojiMD5 BLOB default '' ,  imitateMd5 TEXT,  captureUploadErrCode INTEGER default '0' ,  captureUploadCounter INTEGER default '0' ,  captureEnterTime LONG,  lensId TEXT,  attachTextColor TEXT,  captureScene INTEGER,  attr TEXT,  linkId TEXT,  meanings TEXT, custom_meaning TEXT, emojiFlag LONG default '0');

CREATE INDEX emojiinfogrouptempindex  on EmojiInfo  (  groupId,temp );
CREATE INDEX emojiinfogatalogindex  on EmojiInfo  (  catalog );


-- EmojiInfoDesc definition

CREATE TABLE EmojiInfoDesc (  md5_lang TEXT PRIMARY KEY  COLLATE NOCASE ,  md5 TEXT COLLATE NOCASE ,  lang TEXT COLLATE NOCASE ,  desc TEXT,  groupId TEXT default '' ,  click_flag INTEGER,  download_flag INTEGER);

CREATE INDEX descGroupIdIndex on EmojiInfoDesc ( groupId );
CREATE INDEX descMd5Index on EmojiInfoDesc ( md5 );


-- EmojiIPSetInfo definition

CREATE TABLE EmojiIPSetInfo (  key TEXT PRIMARY KEY ,  title TEXT,  desc TEXT,  iconUrl TEXT,  panelUrl TEXT);


-- EmojiSuggestCacheInfo definition

CREATE TABLE EmojiSuggestCacheInfo (  desc TEXT PRIMARY KEY ,  updateTime INTEGER,  content BLOB);


-- EmojiSuggestDescInfo definition

CREATE TABLE EmojiSuggestDescInfo (  groupID TEXT,  desc TEXT);


-- EmotionDesignerInfo definition

CREATE TABLE EmotionDesignerInfo (  designerIDAndType TEXT PRIMARY KEY ,  content BLOB default '' );


-- EmotionDetailInfo definition

CREATE TABLE EmotionDetailInfo (  productID TEXT PRIMARY KEY ,  content BLOB default '' ,  lan TEXT default '' );


-- EmotionRewardInfo definition

CREATE TABLE EmotionRewardInfo (  productID TEXT PRIMARY KEY ,  content BLOB default '' );


-- EmotionRewardTipInfo definition

CREATE TABLE EmotionRewardTipInfo (  prodcutID TEXT PRIMARY KEY ,  totalCount INTEGER,  continuCount INTEGER,  flag INTEGER,  modifyTime LONG,  showTipsTime LONG,  setFlagTime LONG);


-- facebookfriend definition

CREATE TABLE facebookfriend ( fbid long  PRIMARY KEY , fbname text  , fbimgkey int  , status int  , username text  , nickname text  , nicknamepyinitial text  , nicknamequanpin text  , sex int  , personalcard int  , province text  , city text  , signature text  , alias text  , type int  , email text  );


-- FavOffline definition

CREATE TABLE FavOffline (  url TEXT,  size LONG,  path TEXT,  imgDirPath TEXT,  imgPaths TEXT,  favTime LONG,  updateTime LONG,  status INTEGER,  failNum INTEGER,  isReport INTEGER);


-- FileDownloadInfo definition

CREATE TABLE FileDownloadInfo (  downloadId LONG default '-1'  PRIMARY KEY ,  downloadUrl TEXT default '' ,  secondaryUrl TEXT default '' ,  fileSize LONG default '0' ,  fileName TEXT default '' ,  filePath TEXT default '' ,  fileType INTEGER default '0' ,  status INTEGER default '0' ,  md5 TEXT default '' ,  autoInstall INTEGER default 'false' ,  showNotification INTEGER default 'false' ,  sysDownloadId LONG default '-1' ,  downloaderType INTEGER default '0' ,  appId TEXT default '' ,  downloadUrlHashCode INTEGER default '0' ,  packageName TEXT default '' ,  downloadedSize LONG default '0' ,  totalSize LONG default '0' ,  autoDownload INTEGER default 'false' ,  channelId TEXT default '' ,  scene INTEGER default '0' ,  errCode INTEGER default '0' ,  startTime LONG default '0' ,  startSize LONG default '0' ,  startState INTEGER default '0' ,  fromWeApp INTEGER default 'false' ,  downloadInWifi INTEGER default 'false' ,  extInfo TEXT default '' ,  finishTime LONG default '0' ,  isSecondDownload INTEGER default 'false' ,  fromDownloadApp INTEGER default 'false' ,  updateTime LONG default '0' ,  reserveInWifi INTEGER default 'false' ,  ssid INTEGER default '0' ,  uiarea INTEGER default '0' ,  noticeId INTEGER default '0' ,  downloadType INTEGER default '0' ,  startScene INTEGER default '0' ,  sectionMd5Byte BLOB,  rawAppId TEXT default '' ,  notificationTitle TEXT default '' , userSessionId TEXT default '', enableBrotli INTEGER default 'false');

CREATE INDEX filedownloadinfo_appId  on FileDownloadInfo  (  appId );
CREATE INDEX filedownloadinfo_status  on FileDownloadInfo  (  status );


-- FileMsgInfo definition

CREATE TABLE FileMsgInfo (  msgSvrId LONG PRIMARY KEY ,  overwriteNewMsgId LONG,  cgi TEXT default '' ,  aeskey TEXT default '' ,  filePath TEXT default '' );

CREATE INDEX FileMsgInfo_overwriteNewMsgIdIndex ON FileMsgInfo ( overwriteNewMsgId );


-- finder_img_info_table definition

CREATE TABLE finder_img_info_table ( id INTEGER PRIMARY KEY, msgSvrId LONG, offset INT, totalLen INT, bigImgPath TEXT, thumbImgPath TEXT, createtime INT, msglocalid INT, status INT, nettimes INT, reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text, hashdthumb int DEFAULT 0, iscomplete INT DEFAULT 1, origImgMD5 TEXT, compressType INT DEFAULT 0, midImgPath TEXT, forwardType INT DEFAULT 0, hevcPath TEXT, sendImgType INT DEFAULT 0 , originSourceMd5 TEXT, msgTalker TEXT);

CREATE INDEX finder_img_info_tableserverImgInfoIndex ON finder_img_info_table ( msgSvrId );
CREATE INDEX finder_img_info_tableserverImgInfoHdIndex ON finder_img_info_table ( reserved1 );
CREATE INDEX finder_img_info_tablemsgLocalIdIndex ON finder_img_info_table ( msglocalid );
CREATE INDEX finder_img_info_tableiscomplete_index ON finder_img_info_table ( iscomplete );
CREATE INDEX finder_img_info_tableorigImgMD5_index ON finder_img_info_table ( origImgMD5 );


-- findermessage006 definition

CREATE TABLE findermessage006 (  msgId LONG PRIMARY KEY ,  msgSvrId LONG,  type INTEGER,  status INTEGER,  isSend INTEGER,  isShowTimer INTEGER,  createTime LONG,  talker TEXT,  content TEXT default '' ,  imgPath TEXT,  reserved TEXT,  lvbuffer BLOB,  talkerId INTEGER,  transContent TEXT default '' ,  transBrandWording TEXT default '' ,  bizClientMsgId TEXT default '' ,  bizChatId LONG default '-1' ,  bizChatUserId TEXT default '' ,  msgSeq LONG,  flag INTEGER default '0' ,  fromUsername TEXT,  toUsername TEXT,  extInfo BLOB, solitaireFoldInfo BLOB, historyId TEXT);

CREATE INDEX findermessage006SvrIdIndex ON findermessage006 ( msgSvrId );
CREATE INDEX findermessage006TalkerIndex ON findermessage006 ( talker );
CREATE INDEX findermessage006TalkerStatusIndex ON findermessage006 ( talker,status );
CREATE INDEX findermessage006CreateTimeIndex ON findermessage006 ( createTime );
CREATE INDEX findermessage006CreateTalkerTimeIndex ON findermessage006 ( talker,createTime );
CREATE INDEX findermessage006SendCreateTimeIndex ON findermessage006 ( status,isSend,createTime );
CREATE INDEX findermessage006TalkerTypeIndex ON findermessage006 ( talker,type );


-- findervideoinfo definition

CREATE TABLE findervideoinfo ( filename text  PRIMARY KEY , clientid text  , msgsvrid int  , netoffset int  , filenowsize int  , totallen int  , thumbnetoffset int  , thumblen int  , status int  , createtime long  , lastmodifytime long  , downloadtime long  , videolength int  , msglocalid int  , nettimes int  , cameratype int  , user text  , human text  , reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text  , videofuncflag int ,masssendid long ,masssendlist text,videomd5 text, streamvideo byte[], statextstr text, downloadscene int, mmsightextinfo byte[], preloadsize int, videoformat int, forward_msg_local_id int,msg_uuid text, share_app_info text, origin_file_name text, had_clicked_video int, media_id text, media_flag text, video_path text, media_cdnid text, video_wxa_info BLOB, weapp_source_username text, msg_talker text, forward_msg_talker text);

CREATE INDEX findervideoinfovideo_status_index ON findervideoinfo ( status,downloadtime );
CREATE INDEX findervideoinfomassSendIdIndex ON findervideoinfo ( masssendid );
CREATE INDEX findervideoinfoLastModifyTimeIndex ON findervideoinfo ( lastmodifytime );
CREATE INDEX findervideoinfo_MediaIdIndex ON findervideoinfo ( media_id  );


-- findervideoinfoVideoHash definition

CREATE TABLE findervideoinfoVideoHash  (size int , CreateTime long, hash text ,  cdnxml text, orgpath text);


-- fmessage_conversation definition

CREATE TABLE fmessage_conversation (  talker TEXT default '0'  PRIMARY KEY ,  encryptTalker TEXT default '' ,  displayName TEXT default '' ,  state INTEGER default '0' ,  lastModifiedTime LONG default '0' ,  isNew INTEGER default '0' ,  addScene INTEGER default '0' ,  fmsgSysRowId LONG default '0' ,  fmsgIsSend INTEGER default '0' ,  fmsgType INTEGER default '0' ,  fmsgContent TEXT default '' ,  recvFmsgType INTEGER default '0' ,  contentFromUsername TEXT default '' ,  contentNickname TEXT default '' ,  contentPhoneNumMD5 TEXT default '' ,  contentFullPhoneNumMD5 TEXT default '' ,  contentVerifyContent TEXT default '' ,  fmsgIsHasShowSelfQRCode INTEGER default '0' );

CREATE INDEX fmessageConversationTalkerIndex ON fmessage_conversation ( talker );
CREATE INDEX fmconversation_isnew_Index ON fmessage_conversation ( isNew );


-- fmessage_msginfo definition

CREATE TABLE fmessage_msginfo (  msgContent TEXT default '' ,  isSend INTEGER default '0' ,  talker TEXT default '' ,  encryptTalker TEXT default '' ,  svrId LONG default '0' ,  type INTEGER default '0' ,  createTime LONG default '0' ,  chatroomName TEXT default '' , isContactDeleted INTEGER default '0');

CREATE INDEX fmessageTalkerIndex ON fmessage_msginfo ( talker );


-- ForceNotifyData definition

CREATE TABLE ForceNotifyData (  ForcePushId TEXT PRIMARY KEY ,  CreateTime LONG,  ExpiredTime LONG,  Description TEXT,  UserIcon TEXT,  UserName TEXT,  ExtInfo TEXT,  Status INTEGER default '0' ,  Type INTEGER default '0' );

CREATE INDEX forcePushIdIndex ON ForceNotifyData(ForcePushId);
CREATE INDEX ForceNotifyData_statusIndex ON ForceNotifyData(Status);
CREATE INDEX expireTimeIndex ON ForceNotifyData(ExpiredTime);


-- friend_ext definition

CREATE TABLE friend_ext ( username text  PRIMARY KEY , sex int  , personalcard int  , province text  , city text  , signature text  , reserved1 text  , reserved2 text  , reserved3 text  , reserved4 text  , reserved5 int  , reserved6 int  , reserved7 int  , reserved8 int  );


-- FriendUser definition

CREATE TABLE FriendUser (  encryptUsername TEXT default ''  PRIMARY KEY ,  username TEXT default '' ,  modifyTime LONG default '0' );


-- FunctionMsgItem definition

CREATE TABLE FunctionMsgItem (  cgi TEXT,  cmdid INTEGER,  functionmsgid TEXT PRIMARY KEY ,  version LONG,  preVersion LONG,  retryinterval INTEGER,  reportid INTEGER,  successkey INTEGER,  failkey INTEGER,  finalfailkey INTEGER,  custombuff TEXT,  addMsg BLOB,  status INTEGER default '-1' ,  needShow INTEGER default 'false' ,  defaultContent TEXT,  actionTime LONG default '-1' ,  delayTime LONG default '-1' ,  retryCount INTEGER default '0' ,  retryCountLimit INTEGER default '0' ,  businessInfo BLOB,  opCode INTEGER default '-1' ,  addMsgs BLOB);

CREATE INDEX functionIdIndex ON FunctionMsgItem(functionmsgid);


-- GameHaowanMedia definition

CREATE TABLE GameHaowanMedia (  localId TEXT PRIMARY KEY ,  mediaId TEXT,  mediaType INTEGER,  filePath TEXT,  compressPath TEXT,  thumbPath TEXT,  width INTEGER,  height INTEGER,  duration INTEGER,  size LONG,  isGif INTEGER,  mediaUrl TEXT,  thumbPicUrl TEXT,  uploadState INTEGER default 'false' ,  hostTaskId TEXT,  editFlag INTEGER default '0' );


-- GameHaowanPublishEdition definition

CREATE TABLE GameHaowanPublishEdition (  taskId TEXT PRIMARY KEY ,  createTime LONG,  publishSource INTEGER,  mediaType INTEGER,  localIdList TEXT,  mediaList TEXT,  BusinessData TEXT,  uploadState INTEGER default '0' ,  publishState INTEGER default '0' ,  compressImg INTEGER default 'true' ,  mixState INTEGER default '0' ,  bgMixTaskId TEXT,  sourceSceneId INTEGER default '0' );


-- gamelife_img_info_table definition

CREATE TABLE gamelife_img_info_table ( id INTEGER PRIMARY KEY, msgSvrId LONG, offset INT, totalLen INT, bigImgPath TEXT, thumbImgPath TEXT, createtime INT, msglocalid INT, status INT, nettimes INT, reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text, hashdthumb int DEFAULT 0, iscomplete INT DEFAULT 1, origImgMD5 TEXT, compressType INT DEFAULT 0, midImgPath TEXT, forwardType INT DEFAULT 0, hevcPath TEXT, sendImgType INT DEFAULT 0 , originSourceMd5 TEXT, msgTalker TEXT);

CREATE INDEX gamelife_img_info_tableserverImgInfoIndex ON gamelife_img_info_table ( msgSvrId );
CREATE INDEX gamelife_img_info_tableserverImgInfoHdIndex ON gamelife_img_info_table ( reserved1 );
CREATE INDEX gamelife_img_info_tablemsgLocalIdIndex ON gamelife_img_info_table ( msglocalid );
CREATE INDEX gamelife_img_info_tableiscomplete_index ON gamelife_img_info_table ( iscomplete );
CREATE INDEX gamelife_img_info_tableorigImgMD5_index ON gamelife_img_info_table ( origImgMD5 );


-- gamelifemessage definition

CREATE TABLE gamelifemessage (  msgId LONG PRIMARY KEY ,  msgSvrId LONG,  type INTEGER,  status INTEGER,  isSend INTEGER,  isShowTimer INTEGER,  createTime LONG,  talker TEXT,  content TEXT default '' ,  imgPath TEXT,  reserved TEXT,  lvbuffer BLOB,  talkerId INTEGER,  transContent TEXT default '' ,  transBrandWording TEXT default '' ,  bizClientMsgId TEXT default '' ,  bizChatId LONG default '-1' ,  bizChatUserId TEXT default '' ,  msgSeq LONG,  flag INTEGER default '0' ,  fromUsername TEXT,  toUsername TEXT,  extInfo BLOB, solitaireFoldInfo BLOB, historyId TEXT);

CREATE INDEX gamelifemessageSvrIdIndex ON gamelifemessage ( msgSvrId );
CREATE INDEX gamelifemessageTalkerIndex ON gamelifemessage ( talker );
CREATE INDEX gamelifemessageTalkerStatusIndex ON gamelifemessage ( talker,status );
CREATE INDEX gamelifemessageCreateTimeIndex ON gamelifemessage ( createTime );
CREATE INDEX gamelifemessageCreateTalkerTimeIndex ON gamelifemessage ( talker,createTime );
CREATE INDEX gamelifemessageSendCreateTimeIndex ON gamelifemessage ( status,isSend,createTime );
CREATE INDEX gamelifemessageTalkerTypeIndex ON gamelifemessage ( talker,type );


-- gamelifevideoinfo definition

CREATE TABLE gamelifevideoinfo ( filename text  PRIMARY KEY , clientid text  , msgsvrid int  , netoffset int  , filenowsize int  , totallen int  , thumbnetoffset int  , thumblen int  , status int  , createtime long  , lastmodifytime long  , downloadtime long  , videolength int  , msglocalid int  , nettimes int  , cameratype int  , user text  , human text  , reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text  , videofuncflag int ,masssendid long ,masssendlist text,videomd5 text, streamvideo byte[], statextstr text, downloadscene int, mmsightextinfo byte[], preloadsize int, videoformat int, forward_msg_local_id int,msg_uuid text, share_app_info text, origin_file_name text, had_clicked_video int, media_id text, media_flag text, video_path text, media_cdnid text, video_wxa_info BLOB, weapp_source_username text, msg_talker text, forward_msg_talker text);

CREATE INDEX gamelifevideoinfovideo_status_index ON gamelifevideoinfo ( status,downloadtime );
CREATE INDEX gamelifevideoinfomassSendIdIndex ON gamelifevideoinfo ( masssendid );
CREATE INDEX gamelifevideoinfoLastModifyTimeIndex ON gamelifevideoinfo ( lastmodifytime );
CREATE INDEX gamelifevideoinfo_MediaIdIndex ON gamelifevideoinfo ( media_id  );


-- gamelifevideoinfoVideoHash definition

CREATE TABLE gamelifevideoinfoVideoHash  (size int , CreateTime long, hash text ,  cdnxml text, orgpath text);


-- GameLocalVideoInfo definition

CREATE TABLE GameLocalVideoInfo (  fileId TEXT default ''  PRIMARY KEY ,  userId TEXT default '' ,  appId TEXT default '' ,  appName TEXT default '' ,  filePath TEXT default '' ,  orgFilePath TEXT default '' ,  coverPath TEXT default '' ,  extJsonData TEXT default '' ,  createTime LONG,  durationSec LONG,  title TEXT default '' ,  desc TEXT default '' );

CREATE INDEX GameLocalVideoInfo_UserId ON GameLocalVideoInfo(userId);
CREATE INDEX GameLocalVideoInfo_AppId ON GameLocalVideoInfo(appId);


-- GameMsgPullRecord definition

CREATE TABLE GameMsgPullRecord (  dateTimeRange TEXT PRIMARY KEY ,  pullCount INTEGER default '0' );


-- GameMsgRelativeContent definition

CREATE TABLE GameMsgRelativeContent (  contentId TEXT PRIMARY KEY ,  consumeMsgId LONG default '0' );


-- GamePBCache definition

CREATE TABLE GamePBCache (  key TEXT PRIMARY KEY ,  value BLOB);


-- GameRawMessage definition

CREATE TABLE GameRawMessage (  msgId LONG PRIMARY KEY ,  mergerId TEXT,  gameMsgId TEXT,  msgType INTEGER,  createTime LONG default '0' ,  expireTime LONG default '0' ,  appId TEXT,  showInMsgList INTEGER default 'true' ,  isRead INTEGER default 'false' ,  label TEXT default '' ,  isHidden INTEGER default '0' ,  weight TEXT default '' ,  rawXML TEXT default '' ,  receiveTime LONG default '0' ,  showType INTEGER default '0' ,  interactiveMergeId TEXT default '' ,  hasMergedCount INTEGER default '1' ,  redDotExpireTime LONG default '0' ,  needReport INTEGER default 'false' ,  reappearable INTEGER default 'false' ,  entranceExposure INTEGER default 'false' ,  exposuredCount INTEGER default '0' ,  pushId TEXT default '-1' ,  clickScore FLOAT default '0.5' ,  channel INTEGER default '0' ,  quickResponseContentId TEXT default '' ,  isGreet INTEGER default 'false' ,  relationType INTEGER default '0' ,  mergeSenderIcon TEXT default '' , completeExposuredCount INTEGER default '0', reportType INTEGER default '0', contentId TEXT default '', isRedDotExited INTEGER default 'false');

CREATE INDEX game_create_time_index ON GameRawMessage ( createTime );
CREATE INDEX game_red_dot_expire_time_index ON GameRawMessage ( redDotExpireTime );
CREATE INDEX game_expire_time_index ON GameRawMessage ( expireTime );
CREATE INDEX game_show_type_index ON GameRawMessage ( showType );
CREATE INDEX game_game_msg_id_index ON GameRawMessage ( gameMsgId );
CREATE INDEX game_interactive_merge_id_index ON GameRawMessage ( interactiveMergeId );
CREATE INDEX game_msg_reappear_index ON GameRawMessage ( reappearable,entranceExposure,isRead,isHidden );


-- GameResourceDownload definition

CREATE TABLE GameResourceDownload (  packageName TEXT PRIMARY KEY ,  appId TEXT,  intervalSeconds INTEGER,  expiredSeconds INTEGER,  createTime LONG,  checkCgiTime LONG,  finishDownloadTime LONG,  downloadItemList BLOB,  taskExpiredSeconds LONG,  scene INTEGER);


-- GameSilentDownload definition

CREATE TABLE GameSilentDownload (  appId TEXT PRIMARY KEY ,  downloadUrl TEXT,  size LONG default '0' ,  md5 TEXT,  packageName TEXT,  expireTime LONG default '0' ,  randomTime LONG default '0' ,  isFirst INTEGER default 'true' ,  nextCheckTime LONG default '0' ,  isRunning INTEGER default 'false' ,  noWifi INTEGER default 'true' ,  noSdcard INTEGER default 'true' ,  noEnoughSpace INTEGER default 'true' ,  lowBattery INTEGER default 'true' ,  continueDelay INTEGER default 'true' ,  SecondaryUrl TEXT,  downloadInWidget INTEGER,  sectionMd5Byte BLOB,  forceUpdateFlag INTEGER default '0' ,  downloadScene INTEGER default '0' );


-- getcontactinfov2 definition

CREATE TABLE getcontactinfov2 ( username text  PRIMARY KEY , inserttime long  , type int  , lastgettime int  , reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text  );


-- GetEmotionListCache definition

CREATE TABLE GetEmotionListCache (  reqType TEXT PRIMARY KEY ,  cache BLOB default '' );


-- GetEmotionStoreRecListCache definition

CREATE TABLE GetEmotionStoreRecListCache (  reqType TEXT PRIMARY KEY ,  cache BLOB default '' );


-- GetSysCmdMsgInfo definition

CREATE TABLE GetSysCmdMsgInfo (  originSvrId LONG PRIMARY KEY ,  newMsgId LONG,  fromUserName TEXT default '' ,  toUserName TEXT default '' ,  createTime LONG default '0' ,  content TEXT default '' ,  msgSource TEXT default '' ,  msgSeq INTEGER,  flag INTEGER,  reserved1 INTEGER,  reserved2 LONG,  reserved3 TEXT default '' ,  reserved4 TEXT default '' );


-- GoogleFriend definition

CREATE TABLE GoogleFriend (  googleid TEXT,  googlename TEXT,  googlephotourl TEXT,  googlegmail TEXT,  username TEXT,  nickname TEXT,  nicknameqp TEXT,  usernamepy TEXT,  small_url TEXT,  big_url TEXT,  ret INTEGER,  status INTEGER,  googleitemid TEXT PRIMARY KEY ,  googlecgistatus INTEGER default '2' ,  contecttype TEXT,  googlenamepy TEXT);


-- GroupBindApp definition

CREATE TABLE GroupBindApp (  chatRoomName TEXT default '群username'  PRIMARY KEY ,  BindAppData BLOB);

CREATE INDEX GroupBindAppUserNameIndex ON GroupBindApp ( chatRoomName );


-- GroupSolitatire definition

CREATE TABLE GroupSolitatire (  username TEXT,  key TEXT,  content TEXT,  creator TEXT,  num INTEGER,  firstMsgId LONG,  msgSvrId LONG,  active INTEGER default '-1' ,  lastActiveTime LONG);

CREATE INDEX GroupSolitatire_usernameIndex ON GroupSolitatire ( username );
CREATE INDEX usernameKeyIndex ON GroupSolitatire ( username,key );
CREATE INDEX usernameKeyActiveIndex ON GroupSolitatire ( username,key,active );


-- GroupTodo definition

CREATE TABLE GroupTodo (  todoid TEXT,  roomname TEXT,  username TEXT,  path TEXT,  createtime LONG,  updatetime LONG,  custominfo TEXT default '' ,  title TEXT default '' ,  creator TEXT,  related_msgids TEXT,  manager TEXT,  nreply INTEGER,  state INTEGER,  netSceneState INTEGER,  shareKey TEXT,  shareName TEXT);

CREATE INDEX todoIdRoomNameIndex ON GroupTodo ( todoid,roomname );
CREATE INDEX roomNameCreateTimeIndex ON GroupTodo ( roomname,createtime );


-- GroupTools definition

CREATE TABLE GroupTools (  chatroomname TEXT PRIMARY KEY ,  stickToollist TEXT,  recentUseToolList TEXT,  queryState INTEGER);

CREATE INDEX GroupTools_usernameIndex ON GroupTools ( chatroomname );


-- HardDeviceChampionInfo definition

CREATE TABLE HardDeviceChampionInfo (  username TEXT,  championUrl TEXT,  championMotto TEXT);

CREATE INDEX ExdeviceRankChampionInfoRankIdAppNameIndex ON HardDeviceChampionInfo ( username );


-- HardDeviceInfo definition

CREATE TABLE HardDeviceInfo (  deviceID TEXT PRIMARY KEY ,  brandName TEXT,  mac LONG,  deviceType TEXT,  connProto TEXT,  connStrategy INTEGER,  closeStrategy INTEGER,  md5Str TEXT,  authKey TEXT,  url TEXT,  sessionKey BLOB,  sessionBuf BLOB,  authBuf BLOB,  lvbuffer BLOB);

CREATE INDEX hardDeviceUsernameIndex ON HardDeviceInfo ( brandName );
CREATE INDEX hardDeviceMacIndex ON HardDeviceInfo ( mac );


-- HardDeviceLikeUser definition

CREATE TABLE HardDeviceLikeUser (  rankID TEXT,  appusername TEXT,  username TEXT,  timestamp INTEGER default '0' ,  liketips TEXT default '' );

CREATE INDEX ExdeviceRankLikeInfoRankIdAppNameIndex ON HardDeviceLikeUser ( rankID, appusername );


-- HardDeviceProfileRankDetail definition

CREATE TABLE HardDeviceProfileRankDetail (  appusername TEXT,  title TEXT,  score INTEGER);


-- HardDeviceRankFollowInfo definition

CREATE TABLE HardDeviceRankFollowInfo (  appusername TEXT,  rankID TEXT,  username TEXT,  step INTEGER,  sort INTEGER default '0' );

CREATE INDEX ExdeviceRankFollowRankIdAppNameIndex ON HardDeviceRankFollowInfo ( rankID, appusername );


-- HardDeviceRankInfo definition

CREATE TABLE HardDeviceRankInfo (  rankID TEXT,  appusername TEXT,  username TEXT,  ranknum INTEGER,  score INTEGER,  likecount INTEGER default '0' ,  selfLikeState INTEGER default '3' ,  sportRecord BLOB);

CREATE INDEX ExdeviceRankInfoRankIdAppNameIndex ON HardDeviceRankInfo ( rankID, appusername );


-- HardIotCdnInfo definition

CREATE TABLE HardIotCdnInfo (  msgid LONG PRIMARY KEY ,  fileid TEXT,  aeskey TEXT,  md5 TEXT,  size INTEGER,  talker TEXT,  cdnType INTEGER,  fileUrl TEXT,  fileThumbUrl TEXT);


-- HardIotDeviceInfo definition

CREATE TABLE HardIotDeviceInfo (  deviceId TEXT PRIMARY KEY ,  deviceType INTEGER,  nickName TEXT,  iconUrl TEXT,  supportMsgTypeList TEXT, productType INTEGER);


-- hdheadimginfo definition

CREATE TABLE hdheadimginfo ( username text  PRIMARY KEY , imgwidth int  , imgheigth int  , imgformat text  , totallen int  , startpos int  , headimgtype int  , reserved1 text  , reserved2 text  , reserved3 int  , reserved4 int  );


-- HoneyPayMsgRecord definition

CREATE TABLE HoneyPayMsgRecord (  payMsgId TEXT PRIMARY KEY ,  msgId LONG);


-- ILinkResourceInfo definition

CREATE TABLE ILinkResourceInfo (  projectId TEXT,  resourceName TEXT,  resourceVersion INTEGER,  resourceSize INTEGER,  md5 TEXT,  url TEXT,  createTime LONG);


-- img_flag definition

CREATE TABLE img_flag ( username VARCHAR(40) PRIMARY KEY , imgflag int , lastupdatetime int , reserved1 text ,reserved2 text ,reserved3 int ,reserved4 int ,updateflag int default 0);

CREATE INDEX img_flag_small_url_index ON img_flag ( reserved2 );


-- ImgInfo definition

CREATE TABLE ImgInfo ( id INTEGER PRIMARY KEY, msgSvrId LONG, offset INT, totalLen INT, bigImgPath TEXT, thumbImgPath TEXT );


-- ImgInfo2 definition

CREATE TABLE ImgInfo2 ( id INTEGER PRIMARY KEY, msgSvrId LONG, offset INT, totalLen INT, bigImgPath TEXT, thumbImgPath TEXT, createtime INT, msglocalid INT, status INT, nettimes INT, reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text, hashdthumb int DEFAULT 0, iscomplete INT DEFAULT 1, origImgMD5 TEXT, compressType INT DEFAULT 0, midImgPath TEXT, forwardType INT DEFAULT 0, hevcPath TEXT, sendImgType INT DEFAULT 0 , originSourceMd5 TEXT, msgTalker TEXT);

CREATE INDEX serverImgInfoIndex ON ImgInfo2 ( msgSvrId );
CREATE INDEX serverImgInfoHdIndex ON ImgInfo2 ( reserved1 );
CREATE INDEX msgLocalIdIndex ON ImgInfo2 ( msglocalid );
CREATE INDEX iscomplete_index ON ImgInfo2 ( iscomplete );
CREATE INDEX origImgMD5_index ON ImgInfo2 ( origImgMD5 );


-- invitefriendopen definition

CREATE TABLE invitefriendopen ( username text  PRIMARY KEY , friendtype int  , updatetime int  , reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text  );


-- IPCallAddressItem definition

CREATE TABLE IPCallAddressItem (  wechatUsername TEXT,  systemAddressBookUsername TEXT,  contactId TEXT,  sortKey TEXT);


-- IPCallMsg definition

CREATE TABLE IPCallMsg (  svrId LONG PRIMARY KEY ,  isRead SHORT default '0' ,  title TEXT,  content TEXT,  pushTime LONG,  msgType INTEGER,  descUrl TEXT);


-- IPCallPopularCountry definition

CREATE TABLE IPCallPopularCountry (  countryCode INTEGER PRIMARY KEY ,  callTimeCount LONG,  lastCallTime LONG);


-- IPCallRecord definition

CREATE TABLE IPCallRecord (  phonenumber TEXT,  calltime LONG,  duration LONG,  status INTEGER,  addressId LONG default '-1' ,  phoneType INTEGER default '-1' );


-- JsLogBlockList definition

CREATE TABLE JsLogBlockList (  logId INTEGER PRIMARY KEY ,  liftTime LONG);


-- KindaCacheTable definition

CREATE TABLE KindaCacheTable (  key TEXT PRIMARY KEY ,  value BLOB,  expire_at LONG);


-- LabAppInfo definition

CREATE TABLE LabAppInfo (  LabsAppId TEXT PRIMARY KEY ,  expId TEXT default '' ,  Type INTEGER default '0' ,  BizType INTEGER default '0' ,  Switch INTEGER default '0' ,  AllVer INTEGER default '0' ,  DetailURL TEXT,  WeAppUser TEXT,  WeAppPath TEXT,  Pos INTEGER default '0' ,  TitleKey_android TEXT,  Title_cn TEXT,  Title_hk TEXT,  Title_tw TEXT,  Title_en TEXT,  Desc_cn TEXT,  Desc_hk TEXT,  Desc_tw TEXT,  Desc_en TEXT,  Introduce_cn TEXT,  Introduce_hk TEXT,  Introduce_tw TEXT,  Introduce_en TEXT,  starttime LONG,  endtime LONG,  sequence LONG,  prioritylevel INTEGER,  status INTEGER,  ThumbUrl_cn TEXT,  ThumbUrl_hk TEXT,  ThumbUrl_tw TEXT,  ThumbUrl_en TEXT,  ImgUrl_android_cn TEXT,  ImgUrl_android_hk TEXT,  ImgUrl_android_tw TEXT,  ImgUrl_android_en TEXT,  RedPoint INTEGER,  WeAppDebugMode INTEGER,  idkey INTEGER,  idkeyValue INTEGER,  Icon TEXT,  ImgUrl_cn TEXT,  ImgUrl_hk TEXT,  ImgUrl_tw TEXT,  ImgUrl_en TEXT,  bItemFromXExpt INTEGER);


-- LBSVerifyMessage definition

CREATE TABLE LBSVerifyMessage (  svrid LONG default '0'  PRIMARY KEY ,  status INTEGER,  type INTEGER,  scene INTEGER,  createtime LONG,  talker TEXT,  content TEXT,  sayhiuser TEXT,  sayhicontent TEXT,  imgpath TEXT,  isSend INTEGER,  sayhiencryptuser TEXT,  ticket TEXT,  flag INTEGER);

CREATE INDEX lbsverifymessage_unread_index ON LBSVerifyMessage(status);
CREATE INDEX lbsverifymessage_createtimeIndex ON LBSVerifyMessage(createtime);


-- LiteAppAuthInfo definition

CREATE TABLE LiteAppAuthInfo (  host TEXT PRIMARY KEY ,  param TEXT,  headerMap TEXT,  paramMap TEXT,  updateTime LONG);


-- LiteAppBaselibInfo definition

CREATE TABLE LiteAppBaselibInfo (  majorVersion TEXT PRIMARY KEY ,  signatureKey TEXT,  pkgPath TEXT,  pkgType TEXT,  patchId TEXT,  updateTime LONG,  url TEXT,  md5 TEXT,  lastUseTime LONG, iLinkVersion INTEGER, version TEXT);


-- LiteAppConfigInfo definition

CREATE TABLE LiteAppConfigInfo (  appId TEXT PRIMARY KEY ,  signatureKey TEXT,  packageConfigPath TEXT,  updateTime LONG,  md5 TEXT,  dynamicConfigPath TEXT,  iLinkVersion INTEGER,  configJson TEXT);


-- LiteAppInfo definition

CREATE TABLE LiteAppInfo (  appId TEXT PRIMARY KEY ,  groupId TEXT,  signatureKey TEXT,  pkgPath TEXT,  pkgType TEXT,  patchId TEXT,  updateTime LONG,  version TEXT,  url TEXT,  md5 TEXT,  lastUseTime LONG, iLinkVersion INTEGER, openOption TEXT);


-- LiveTipsBar definition

CREATE TABLE LiveTipsBar (  liveId LONG default '0'  PRIMARY KEY ,  hostRoomId TEXT default '' ,  liveName TEXT default '' ,  thumbUrl TEXT default '' ,  anchorUsername TEXT default '' ,  isSender INTEGER default 'false' ,  timeStamp LONG default '0' );

CREATE INDEX HostRoom ON LiveTipsBar ( hostRoomId );


-- LoanEntryInfo definition

CREATE TABLE LoanEntryInfo (  title TEXT PRIMARY KEY ,  loan_jump_url TEXT,  red_dot_index INTEGER,  is_show_entry INTEGER,  tips TEXT,  is_overdue INTEGER,  available_otb TEXT);


-- LocalGameReport definition

CREATE TABLE LocalGameReport (  pkgName TEXT PRIMARY KEY ,  lastReportTimeStamp LONG);


-- LocalLiteAppConf definition

CREATE TABLE LocalLiteAppConf (  url TEXT PRIMARY KEY ,  appid TEXT,  path TEXT,  expire_duration INTEGER,  refresh_duration INTEGER,  wepkg_id TEXT,  updateTime LONG,  hasLiteConf INTEGER default 'false' );


-- LocalRedPacketStoryInfo definition

CREATE TABLE LocalRedPacketStoryInfo (  title TEXT,  logo_url TEXT,  logo_md5 TEXT,  description TEXT,  corp_name TEXT,  action_type INTEGER,  action_url TEXT,  action_app_username TEXT,  action_app_nickname TEXT,  packet_id TEXT PRIMARY KEY ,  update_time LONG,  subtype_id INTEGER,  action_emotion_designer_uin INTEGER,  action_jump_text TEXT,  joint_label_text TEXT,  same_receive_link TEXT,  detail_dynamic_url TEXT,  action_before_jump_text TEXT,  action_normal_icon_url TEXT,  action_dark_icon_url TEXT, wxapp_info_app_name TEXT, wxapp_info_wording TEXT, wxapp_info_app_path TEXT, wxapp_info_icon_url TEXT, detail_image_url_md5 TEXT, detail_atmosphere_pag_url TEXT, detail_image_url TEXT, outer_jump_action_jump_newlife INTEGER, outer_jump_action_jump_text TEXT, outer_jump_action_type INTEGER, outer_jump_action_app_username TEXT);

CREATE INDEX LocalRedPacketStoryInfoPacketIdIndex ON LocalRedPacketStoryInfo(packet_id);


-- LocalStoryDetail definition

CREATE TABLE LocalStoryDetail (  media_type INTEGER,  media_url TEXT,  media_md5 TEXT,  height INTEGER,  width INTEGER,  packet_id TEXT,  media_fuzzy_thumbnail_url TEXT,  media_fuzzy_thumbnail_md5 TEXT);

CREATE INDEX LocalStoryDetailPacketIdIndex ON LocalStoryDetail(packet_id);


-- LuckyMoneyDetailOpenRecord definition

CREATE TABLE LuckyMoneyDetailOpenRecord (  send_id TEXT PRIMARY KEY ,  open_count INTEGER);


-- LuckyMoneyEnvelopeResource definition

CREATE TABLE LuckyMoneyEnvelopeResource (  subtype INTEGER PRIMARY KEY ,  bubbleMd5 TEXT,  bubbledynamicMd5 TEXT,  coverMd5 TEXT,  minilogoMd5 TEXT,  detailMd5 TEXT,  version INTEGER,  bubblewidgetMd5 TEXT,  coverwidgetMd5 TEXT);


-- MagicPkgInfo definition

CREATE TABLE MagicPkgInfo (  pkgId TEXT PRIMARY KEY ,  pkgPath TEXT,  unZipPath TEXT,  pkgType INTEGER,  patchId TEXT,  updateTime LONG,  version TEXT,  url TEXT,  md5 TEXT,  lastUseTime LONG,  wxaPkgPath TEXT,  originalName TEXT);


-- massendinfo definition

CREATE TABLE massendinfo ( clientid text  PRIMARY KEY , status int  , createtime long  , lastmodifytime long  , filename text  , thumbfilename text  , tolist text  , tolistcount int  , msgtype int  , mediatime int  , datanetoffset int  , datalen int  , thumbnetoffset int  , thumbtotallen int  , reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text  );

CREATE INDEX massendinfostatus_index ON massendinfo ( status );


-- MediaDuplication definition

CREATE TABLE MediaDuplication  (md5 text , size int , path text , createtime long, remuxing text, duration int, status int);

CREATE INDEX MD5Index ON MediaDuplication ( md5 );


-- message definition

CREATE TABLE message ( msgId INTEGER PRIMARY KEY, msgSvrId INTEGER , type INT, status INT, isSend INT, isShowTimer INTEGER, createTime INTEGER, talker TEXT, content TEXT, imgPath TEXT, reserved TEXT, lvbuffer BLOB, transContent TEXT,transBrandWording TEXT ,talkerId INTEGER, bizClientMsgId TEXT, bizChatId INTEGER DEFAULT -1, bizChatUserId TEXT, msgSeq INTEGER, flag INT, solitaireFoldInfo BLOB, historyId TEXT);

CREATE INDEX messageIdIndex ON message ( msgId );
CREATE INDEX messageSvrIdIndex ON message ( msgSvrId );
CREATE INDEX messageSendCreateTimeIndex ON message ( status,isSend,createTime );
CREATE INDEX messageCreateTimeIndex ON message ( createTime );
CREATE INDEX messageCreateTaklerTypeTimeIndex ON message ( talker,type,createTime );
CREATE INDEX messageTalkerStatusIndex ON message ( talker,status );
CREATE INDEX messageTalkerCreateTimeIsSendIndex ON message ( talker,isSend,createTime );
CREATE INDEX messageCreateTaklerTimeIndex ON message ( talker,createTime );
CREATE INDEX messageTalkerSvrIdIndex ON message ( talker,msgSvrId );
CREATE INDEX messageTalkerIdTypeIndex ON message ( talkerId,type );
CREATE INDEX messageTalkerTypeIndex ON message ( talker,type );
CREATE INDEX messagemessageTalkerMsgSeqIndex ON message ( talker,msgSeq );
CREATE INDEX messagemessageTalkerFlagMsgSeqIndex ON message ( talker,flag,msgSeq );


-- MsgQuote definition

CREATE TABLE MsgQuote (  msgId LONG,  msgSvrId LONG,  quotedMsgId LONG,  quotedMsgSvrId LONG,  status INTEGER, quotedMsgTalker TEXT);

CREATE INDEX quotedMsgSvrIdIndex ON MsgQuote ( quotedMsgSvrId );
CREATE INDEX quotedMsgLocalIdTalkerIndex ON MsgQuote ( msgId,quotedMsgTalker );


-- MultiTalkInfo definition

CREATE TABLE MultiTalkInfo (  wxGroupId TEXT PRIMARY KEY ,  groupId TEXT,  roomId INTEGER,  roomKey LONG,  routeId INTEGER,  inviteUserName TEXT,  memberCount INTEGER,  createTime LONG,  state INTEGER default '0' ,  ilinkRoomId LONG);

CREATE INDEX idx_MultiTalkInfo_key  on MultiTalkInfo  (  wxGroupId );


-- MultiTalkMember definition

CREATE TABLE MultiTalkMember (  memberUuid LONG,  wxGroupId TEXT,  userName TEXT,  inviteUserName TEXT,  memberId LONG,  status INTEGER,  createTime LONG);

CREATE INDEX idx_MultiTalkMember  on MultiTalkMember  (  wxGroupId );


-- MultiTaskInfo definition

CREATE TABLE MultiTaskInfo (  id TEXT PRIMARY KEY ,  type INTEGER default '0' ,  createTime LONG default '0' ,  updateTime LONG default '0' ,  showData BLOB,  data BLOB default '' );


-- Music definition

CREATE TABLE Music (  musicId TEXT PRIMARY KEY ,  originMusicId TEXT,  musicType INTEGER,  downloadedLength LONG,  wifiDownloadedLength LONG,  endFlag INTEGER,  wifiEndFlag INTEGER,  updateTime LONG,  songId INTEGER,  songName TEXT,  songSinger TEXT,  songAlbum TEXT,  songAlbumType INTEGER,  songAlbumUrl TEXT,  songHAlbumUrl TEXT,  songAlbumLocalPath TEXT,  songWifiUrl TEXT,  songWapLinkUrl TEXT,  songWebUrl TEXT,  appId TEXT,  songMediaId TEXT,  songSnsAlbumUser TEXT,  songSnsShareUser TEXT,  songLyric TEXT,  songBgColor INTEGER,  songLyricColor INTEGER,  songFileLength LONG,  songWifiFileLength LONG,  hideBanner INTEGER,  jsWebUrlDomain TEXT,  isBlock INTEGER,  startTime INTEGER,  mimetype TEXT,  protocol TEXT,  barBackToWebView INTEGER,  musicbar_url TEXT,  srcUsername TEXT,  playbackRate DOUBLE,  songMId TEXT,  mid TEXT);


-- netstat definition

CREATE TABLE netstat ( id INTEGER PRIMARY KEY, peroid INT, textCountIn INT, textBytesIn INT, imageCountIn INT, imageBytesIn INT, voiceCountIn INT, voiceBytesIn INT, videoCountIn INT, videoBytesIn INT, mobileBytesIn INT, wifiBytesIn INT, sysMobileBytesIn INT, sysWifiBytesIn INT, textCountOut INT, textBytesOut INT, imageCountOut INT, imageBytesOut INT, voiceCountOut INT, voiceBytesOut INT, videoCountOut INT, videoBytesOut INT, mobileBytesOut INT, wifiBytesOut INT, sysMobileBytesOut INT, sysWifiBytesOut INT, reserved1 INT, reserved2 INT, reserved3 TEXT, realMobileBytesIn INT, realWifiBytesIn INT, realMobileBytesOut INT, realWifiBytesOut INT);

CREATE INDEX statInfoIndex ON netstat ( peroid );


-- NewTipsInfo definition

CREATE TABLE NewTipsInfo (  tipId INTEGER default '0'  PRIMARY KEY ,  tipVersion INTEGER,  tipkey TEXT,  tipType INTEGER,  isExit INTEGER,  hadRead INTEGER,  isReject INTEGER,  beginShowTime LONG,  disappearTime LONG,  overdueTime LONG,  tipsShowInfo BLOB,  extInfo TEXT,  pagestaytime LONG);


-- NewTipsInfo2 definition

CREATE TABLE NewTipsInfo2 (  uniqueId TEXT,  path INTEGER,  showType INTEGER,  title TEXT,  icon_url TEXT,  parents BLOB,  tipId INTEGER,  priority INTEGER,  tipType INTEGER,  beginShowTime LONG,  exposureTime LONG,  overdueTime LONG,  disappearTime LONG,  exposureDisappearTime LONG,  minClientVersion INTEGER,  maxClientVersion INTEGER,  extInfo TEXT,  state INTEGER default '0' ,  dynamicPath TEXT,  lang TEXT,  regCountry TEXT);

CREATE INDEX uniqueIdIndex ON NewTipsInfo2 ( uniqueId );
CREATE INDEX pathQueryIndex ON NewTipsInfo2 ( path,state,beginShowTime,disappearTime );


-- NotifyMessageRecord definition

CREATE TABLE NotifyMessageRecord (  msgId LONG PRIMARY KEY ,  talker TEXT,  createTime LONG,  digest TEXT, is_special_talker INTEGER);


-- OfflineOrderStatus definition

CREATE TABLE OfflineOrderStatus (  reqkey TEXT PRIMARY KEY ,  ack_key TEXT,  status INTEGER,  receive_time LONG);


-- OldAccountFriend definition

CREATE TABLE OldAccountFriend (  encryptUsername TEXT,  oldUsername TEXT,  ticket TEXT,  nickname TEXT,  addState INTEGER,  showHead INTEGER,  pinyinName TEXT,  username TEXT,  seq INTEGER);


-- OpenIMAccTypeInfo definition

CREATE TABLE OpenIMAccTypeInfo (  acctTypeId TEXT,  language TEXT,  accTypeRec BLOB,  updateTime LONG default '0' );


-- OpenIMAppIdInfo definition

CREATE TABLE OpenIMAppIdInfo (  appid TEXT,  language TEXT,  appRec BLOB,  updateTime LONG default '0' ,  acctTypeId TEXT,  subType INTEGER default '0' );


-- OpenIMArchive definition

CREATE TABLE OpenIMArchive (  username TEXT PRIMARY KEY ,  content TEXT);


-- OpenIMFinderInfoNew definition

CREATE TABLE OpenIMFinderInfoNew (  openIMUsername TEXT PRIMARY KEY ,  finder_username TEXT);


-- OpenIMKefuContact definition

CREATE TABLE OpenIMKefuContact (  username TEXT default ''  PRIMARY KEY ,  nickname TEXT default '' ,  bigHeadImg TEXT default '' ,  smallHeadImg TEXT default '' ,  nicknamePyInit TEXT default '' ,  nicknamePyQuanPin TEXT default '' ,  openImAppId TEXT default '' ,  openImDescWordingId TEXT default '' ,  source INTEGER default '' ,  checkTime INTEGER default '0' ,  customInfoDetailVisible INTEGER,  customInfoDetail TEXT,  ticket TEXT,  type LONG default '0' ,  finderUsername TEXT default '' ,  kfUrl TEXT default '' ,  hasSetReport INTEGER default 'false' ,  needReport INTEGER default 'false' ,  locationType TEXT default 'Wsg84' , kefuType INTEGER default '0', kefuToolsInfo TEXT default '', enterprise_auth_status INTEGER default '0');

CREATE INDEX OpenIMKefuContact_username_index ON OpenIMKefuContact(username);


-- OpenIMSnsFlag definition

CREATE TABLE OpenIMSnsFlag (  openIMUsername TEXT PRIMARY KEY ,  openIMSnsFlag LONG default '0' );


-- OpenIMWordingInfo definition

CREATE TABLE OpenIMWordingInfo (  appid TEXT,  wordingId TEXT,  language TEXT,  wording TEXT,  pinyin TEXT,  quanpin TEXT,  updateTime LONG default '0' );


-- OpenMsgListener definition

CREATE TABLE OpenMsgListener (  appId TEXT PRIMARY KEY ,  packageName TEXT,  status INTEGER default '0' ,  sceneFlag INTEGER default '0' ,  msgTypeFlag INTEGER default '0' ,  msgState INTEGER default '0' );

CREATE INDEX openMsgListenerAppIdIndex ON OpenMsgListener ( appId );
CREATE INDEX openMsgListenerStatusIndex ON OpenMsgListener ( status );


-- oplog2 definition

CREATE TABLE oplog2 ( id INTEGER PRIMARY KEY , inserTime long , cmdId int , buffer blob , reserved1 int , reserved2 long , reserved3 text , reserved4 text );


-- OrderCommonMsgXml definition

CREATE TABLE OrderCommonMsgXml (  msgId TEXT PRIMARY KEY ,  msgContentXml TEXT,  isRead TEXT);


-- packageinfo definition

CREATE TABLE packageinfo ( id int  PRIMARY KEY, version int  , name text  , size int  , packname text  , status int  , reserved1 text  , reserved2 text  , reserved3 int  , reserved4 int  );


-- packageinfo2 definition

CREATE TABLE packageinfo2 ( localId text  PRIMARY KEY , id int  , version int  , name text  , size int  , packname text  , status int  , type int  , reserved1 text  , reserved2 text  , reserved3 int  , reserved4 int  );


-- PBCache definition

CREATE TABLE PBCache (  key TEXT PRIMARY KEY ,  value BLOB);


-- PendingCardId definition

CREATE TABLE PendingCardId (  cardUserId TEXT PRIMARY KEY ,  retryCount INTEGER);


-- PieceMusicInfo definition

CREATE TABLE PieceMusicInfo (  musicId TEXT PRIMARY KEY ,  musicUrl TEXT,  fileName TEXT,  indexBitData BLOB,  fileCacheComplete INTEGER,  pieceFileMIMEType TEXT,  removeDirtyBit INTEGER);


-- PocketMoneyMsgRecord definition

CREATE TABLE PocketMoneyMsgRecord (  payMsgId TEXT PRIMARY KEY ,  msgId LONG);


-- ProfileInfo definition

CREATE TABLE ProfileInfo (  username TEXT PRIMARY KEY ,  originalArticleCount INTEGER default '1' ,  friendSubscribeCount INTEGER default '1' ,  allArticleWording TEXT,  historyArticlesUrl TEXT,  userRole INTEGER default '1' ,  banReason TEXT,  showRecommendArticle INTEGER default '0' ,  showService INTEGER default '0' ,  messageListStr TEXT,  serviceInfoListStr TEXT,  bizAccountListStr TEXT,  cacheTime LONG default '0' ,  decryptUserName TEXT default '' ,  hiddenAvatar INTEGER default '0' ,  hiddenButtonBeforeFocus INTEGER default '0' ,  newBanReason TEXT);


-- qmessage definition

CREATE TABLE qmessage ( msgId INTEGER PRIMARY KEY, msgSvrId INTEGER , type INT, status INT, isSend INT, isShowTimer INTEGER, createTime INTEGER, talker TEXT, content TEXT, imgPath TEXT, reserved TEXT, lvbuffer BLOB, transContent TEXT, transBrandWording TEXT , talkerId INTEGER, bizClientMsgId TEXT, bizChatId INTEGER DEFAULT -1, bizChatUserId TEXT, msgSeq INTEGER, flag INT DEFAULT 0, solitaireFoldInfo BLOB, historyId TEXT);

CREATE INDEX qmessageSvrIdIndex ON qmessage ( msgSvrId );
CREATE INDEX qmessageTalkerIndex ON qmessage ( talker );
CREATE INDEX qmessageTalerStatusIndex ON qmessage ( talker,status );
CREATE INDEX qmessageCreateTimeIndex ON qmessage ( createTime );
CREATE INDEX qmessageCreateTaklerTimeIndex ON qmessage ( talker,createTime );
CREATE INDEX qmessageSendCreateTimeIndex ON qmessage ( status,isSend,createTime );
CREATE INDEX qmessageTalkerSvrIdIndex ON qmessage ( talker,msgSvrId );
CREATE INDEX qmessageTalkerTypeIndex ON qmessage ( talker,type );


-- qqgroup definition

CREATE TABLE qqgroup ( grouopid int PRIMARY KEY,membernum int,weixinnum int,insert_time int,lastupdate_time int,needupdate int,updatekey text,groupname text,reserved1 text ,reserved2 text ,reserved3 int ,reserved4 int );


-- qqlist definition

CREATE TABLE qqlist ( qq long  PRIMARY KEY , wexinstatus int  , groupid int  , username text  , nickname text  , pyinitial text  , quanpin text  , qqnickname text  , qqpyinitial text  , qqquanpin text  , qqremark text  , qqremarkpyinitial text  , qqremarkquanpin text  , reserved1 text  , reserved2 text  , reserved3 int  , reserved4 int  );

CREATE INDEX groupid_index ON qqlist ( groupid );
CREATE INDEX qq_index ON qqlist ( qq );


-- rbottleconversation definition

CREATE TABLE rbottleconversation (  msgCount INTEGER default '0' ,  username TEXT default ''  PRIMARY KEY ,  unReadCount INTEGER default '0' ,  chatmode INTEGER default '0' ,  status INTEGER default '0' ,  isSend INTEGER default '0' ,  conversationTime LONG default '0' ,  content TEXT default '' ,  msgType TEXT default '' ,  customNotify TEXT default '' ,  showTips INTEGER default '0' ,  flag LONG default '0' ,  digest TEXT default '' ,  digestUser TEXT default '' ,  hasTrunc INTEGER default '0' ,  parentRef TEXT,  attrflag INTEGER default '0' ,  editingMsg TEXT default '' ,  atCount INTEGER default '0' ,  sightTime LONG default '0' ,  unReadMuteCount INTEGER default '0' ,  lastSeq LONG,  UnDeliverCount INTEGER,  UnReadInvite INTEGER,  firstUnDeliverSeq LONG,  editingQuoteMsgId LONG default '0' ,  hasTodo INTEGER default '0' ,  hbMarkRed INTEGER default '0' ,  remitMarkRed INTEGER default '0' ,  hasSpecialFollow INTEGER default '0' );

CREATE INDEX rbottleconversation_unreadcount_index ON  rbottleconversation ( unReadCount );


-- rcontact definition

CREATE TABLE rcontact (  username TEXT default ''  PRIMARY KEY ,  alias TEXT default '' ,  conRemark TEXT default '' ,  domainList TEXT default '' ,  nickname TEXT default '' ,  pyInitial TEXT default '' ,  quanPin TEXT default '' ,  showHead INTEGER default '0' ,  type INTEGER default '0' ,  uiType LONG default '0' ,  weiboFlag INTEGER default '0' ,  weiboNickname TEXT default '' ,  conRemarkPYFull TEXT default '' ,  conRemarkPYShort TEXT default '' ,  lvbuff BLOB,  verifyFlag INTEGER default '0' ,  encryptUsername TEXT default '' ,  chatroomFlag INTEGER,  deleteFlag INTEGER default '0' ,  contactLabelIds TEXT default '' ,  descWordingId TEXT default '' ,  openImAppid TEXT,  sourceExtInfo TEXT,  ticket TEXT default '' ,  usernameFlag LONG default '0' ,  contactExtra BLOB, createTime LONG default '0');

CREATE INDEX contact_alias_index ON rcontact ( alias );
CREATE INDEX en_username_unique_index ON rcontact ( encryptUsername );
CREATE INDEX type_verifyFlag_index ON rcontact ( type,verifyFlag );
CREATE INDEX contact_usernameflag_index ON rcontact ( usernameFlag );
CREATE UNIQUE INDEX contact_username_unique_index ON rcontact ( username );


-- rconversation definition

CREATE TABLE rconversation (  msgCount INTEGER default '0' ,  username TEXT default ''  PRIMARY KEY ,  unReadCount INTEGER default '0' ,  chatmode INTEGER default '0' ,  status INTEGER default '0' ,  isSend INTEGER default '0' ,  conversationTime LONG default '0' ,  content TEXT default '' ,  msgType TEXT default '' ,  customNotify TEXT default '' ,  showTips INTEGER default '0' ,  flag LONG default '0' ,  digest TEXT default '' ,  digestUser TEXT default '' ,  hasTrunc INTEGER default '0' ,  parentRef TEXT,  attrflag INTEGER default '0' ,  editingMsg TEXT default '' ,  atCount INTEGER default '0' ,  sightTime LONG default '0' ,  unReadMuteCount INTEGER default '0' ,  lastSeq LONG,  UnDeliverCount INTEGER,  UnReadInvite INTEGER,  firstUnDeliverSeq LONG,  editingQuoteMsgId LONG default '0' ,  hasTodo INTEGER default '0' ,  hbMarkRed INTEGER default '0' ,  remitMarkRed INTEGER default '0' ,  hasSpecialFollow INTEGER default '0' );

CREATE INDEX rconversation_unreadcount_index ON rconversation ( unReadCount );
CREATE INDEX rconversation_parentref_index ON  rconversation ( parentRef );
CREATE INDEX rconversation_flag_parentref_index ON  rconversation ( flag,parentRef );


-- readerappnews1 definition

CREATE TABLE readerappnews1 ( tweetid text  PRIMARY KEY , time long  , type int  , name text  , title text  , url text  , shorturl text  , longurl text  , pubtime long  , sourcename text  , sourceicon text  , istop int  , cover text  , digest text  , reserved1 int  , reserved2 long  , reserved3 text  , reserved4 text  );

CREATE INDEX readerapptime ON readerappnews1 ( time );
CREATE INDEX readerappfunctionId ON readerappnews1 ( reserved3 );


-- readerappweibo definition

CREATE TABLE readerappweibo ( tweetid text  PRIMARY KEY , time long  , type int  , name text  , title text  , url text  , shorturl text  , longurl text  , pubtime long  , sourcename text  , sourceicon text  , istop int  , cover text  , digest text  , reserved1 int  , reserved2 long  , reserved3 text  , reserved4 text  );

CREATE INDEX readerappweiboreaderapptime ON readerappweibo ( time );


-- RecordCDNInfo definition

CREATE TABLE RecordCDNInfo (  localId INTEGER PRIMARY KEY ,  recordLocalId INTEGER,  toUser TEXT default '' ,  dataId TEXT,  mediaId TEXT,  path TEXT,  cdnUrl TEXT,  cdnKey TEXT,  totalLen INTEGER default '0' ,  isThumb INTEGER default 'false' ,  offset INTEGER default '0' ,  type INTEGER default '0' ,  fileType INTEGER default '5' ,  status INTEGER default '0' ,  errCode INTEGER default '0' ,  tpaeskey TEXT,  tpauthkey TEXT,  tpdataurl TEXT);


-- RecordMessageInfo definition

CREATE TABLE RecordMessageInfo (  localId INTEGER PRIMARY KEY ,  msgId LONG default '-1' ,  oriMsgId LONG default '-1' ,  toUser TEXT default '' ,  title TEXT,  desc TEXT,  dataProto BLOB,  type INTEGER default '0' ,  status INTEGER default '0' ,  favFrom TEXT, oriMsgTalker TEXT default '');


-- RemittanceRecord definition

CREATE TABLE RemittanceRecord (  transferId TEXT PRIMARY KEY ,  locaMsgId LONG,  receiveStatus INTEGER default '-1' ,  isSend INTEGER,  talker TEXT,  invalidtime LONG,  receiverName TEXT,  hasClicked INTEGER, receiveTime LONG);

CREATE INDEX remittance_record_status_index ON RemittanceRecord(receiveStatus);
CREATE INDEX remittance_record_talker_index ON RemittanceRecord(talker);


-- role_info definition

CREATE TABLE role_info ( id TEXT PRIMARY KEY, name TEXT, status INT, text_reserved1 TEXT, text_reserved2 TEXT, text_reserved3 TEXT, text_reserved4 TEXT, int_reserved1 INT, int_reserved2 INT, int_reserved3 INT, int_reserved4 INT );


-- RoomVerifyApplicationStg definition

CREATE TABLE RoomVerifyApplicationStg (  primaryKey TEXT PRIMARY KEY ,  hashKey TEXT,  chatRoomName TEXT,  msgId LONG,  data BLOB,  state INTEGER,  read INTEGER,  updateTime LONG);


-- RtosQuickReplyInfo definition

CREATE TABLE RtosQuickReplyInfo (  orderIndex INTEGER,  quickMsg TEXT);


-- SafeDeviceInfo definition

CREATE TABLE SafeDeviceInfo (  uid TEXT default ''  PRIMARY KEY ,  name TEXT default '' ,  devicetype TEXT default '' ,  createtime LONG default '0' ,  online INTEGER default 'false' );


-- ScanHistoryItem definition

CREATE TABLE ScanHistoryItem (  productId TEXT PRIMARY KEY ,  xmlContent TEXT,  ScanTime LONG,  funcType INTEGER,  qrcodeUrl TEXT,  scene INTEGER);


-- ScanTranslationResult definition

CREATE TABLE ScanTranslationResult (  originMD5 TEXT PRIMARY KEY ,  resultFile TEXT,  fromLang TEXT,  toLang TEXT,  brand TEXT, resultImageAesKey TEXT, originalImageAesKey TEXT, originalImageFileId TEXT, resultImageFileId TEXT);


-- SelectRecord definition

CREATE TABLE SelectRecord (  historyId TEXT,  msgId LONG,  talker TEXT,  chatHistoryItem BLOB);

CREATE INDEX SelectRecord_historyIdIndex ON SelectRecord ( historyId );


-- shakeitem1 definition

CREATE TABLE shakeitem1 (  shakeItemID INTEGER default '0'  PRIMARY KEY ,  username TEXT,  nickname TEXT,  province TEXT,  city TEXT,  signature TEXT,  distance TEXT,  sex INTEGER,  imgstatus INTEGER,  hasHDImg INTEGER,  insertBatch INTEGER,  reserved1 INTEGER,  reserved2 INTEGER,  reserved3 TEXT,  reserved4 TEXT,  type INTEGER,  lvbuffer BLOB,  regionCode TEXT,  snsFlag INTEGER,  sns_bgurl TEXT);

CREATE INDEX shakeItemNewUsernameIndex ON shakeitem1 ( username );


-- shakemessage definition

CREATE TABLE shakemessage (  svrid LONG default '0'  PRIMARY KEY ,  type INTEGER,  subtype INTEGER default '0' ,  createtime LONG,  tag TEXT,  status INTEGER,  title TEXT,  desc TEXT,  thumburl TEXT,  reserved1 TEXT,  reserved2 TEXT,  reserved3 INTEGER,  reservedBuf BLOB);

CREATE INDEX shakemessage_status_index ON shakemessage ( status );
CREATE INDEX shakemessage_type_index ON shakemessage ( type );


-- ShakeNewYearFriendInfo definition

CREATE TABLE ShakeNewYearFriendInfo (  username TEXT default ''  PRIMARY KEY ,  lastshaketime INTEGER default '0' ,  isshowed INTEGER default 'false' );


-- shaketvhistory definition

CREATE TABLE shaketvhistory (  username TEXT default ''  PRIMARY KEY ,  deeplink TEXT default '' ,  title TEXT default '' ,  iconurl TEXT default '' ,  createtime LONG default '' );


-- shakeverifymessage definition

CREATE TABLE shakeverifymessage (  svrid LONG default '0'  PRIMARY KEY ,  status INTEGER,  type INTEGER,  scene INTEGER,  createtime LONG,  talker TEXT,  content TEXT,  sayhiuser TEXT,  sayhicontent TEXT,  imgpath TEXT,  isSend INTEGER);

CREATE INDEX shakeverifymessage_unread_index ON shakeverifymessage ( status );
CREATE INDEX shakeverifymessage_statusIndex ON shakeverifymessage ( status );
CREATE INDEX shakeverifymessage_createtimeIndex ON shakeverifymessage ( createtime );


-- ShareCardInfo definition

CREATE TABLE ShareCardInfo (  card_id TEXT PRIMARY KEY ,  card_tp_id TEXT,  from_username TEXT,  consumer TEXT,  app_id TEXT,  status INTEGER,  share_time LONG,  local_updateTime LONG,  updateTime LONG,  begin_time LONG,  end_time LONG,  updateSeq LONG,  block_mask LONG,  dataInfoData BLOB,  cardTpInfoData BLOB,  shareInfoData BLOB,  shopInfoData BLOB,  categoryType INTEGER default '0' ,  itemIndex INTEGER default '0' );


-- ShareCardSyncItemInfo definition

CREATE TABLE ShareCardSyncItemInfo (  card_id TEXT PRIMARY KEY ,  state_flag INTEGER,  update_time LONG,  seq LONG,  retryCount INTEGER);


-- SignedAgreementInfo definition

CREATE TABLE SignedAgreementInfo (  key TEXT PRIMARY KEY ,  selfUsername TEXT,  id INTEGER,  signedVersion INTEGER default '0' );


-- SmileyInfo definition

CREATE TABLE SmileyInfo (  key TEXT PRIMARY KEY ,  cnValue TEXT,  qqValue TEXT,  twValue TEXT,  enValue TEXT,  thValue TEXT,  fileName TEXT,  eggIndex INTEGER default '-1' ,  position INTEGER default '-1' ,  flag INTEGER);


-- SmileyPanelConfigInfo definition

CREATE TABLE SmileyPanelConfigInfo (  key TEXT PRIMARY KEY ,  position INTEGER);


-- Stranger definition

CREATE TABLE Stranger (  encryptUsername TEXT default ''  PRIMARY KEY ,  conRemark TEXT default '' ,  contactLabels TEXT default '' ,  conDescription TEXT default '' ,  conPhone TEXT default '' );


-- TablesVersion definition

CREATE TABLE TablesVersion (  tableHash INTEGER PRIMARY KEY ,  tableSQLMD5 TEXT);


-- TaskBarInfo definition

CREATE TABLE TaskBarInfo (  id TEXT PRIMARY KEY ,  type INTEGER default '0' ,  createTime LONG default '0' ,  updateTime LONG default '0' ,  showData BLOB,  data BLOB default '' );


-- textstatusmessage definition

CREATE TABLE textstatusmessage (  msgId LONG PRIMARY KEY ,  msgSvrId LONG,  type INTEGER,  status INTEGER,  isSend INTEGER,  isShowTimer INTEGER,  createTime LONG,  talker TEXT,  content TEXT default '' ,  imgPath TEXT,  reserved TEXT,  lvbuffer BLOB,  talkerId INTEGER,  transContent TEXT default '' ,  transBrandWording TEXT default '' ,  bizClientMsgId TEXT default '' ,  bizChatId LONG default '-1' ,  bizChatUserId TEXT default '' ,  msgSeq LONG,  flag INTEGER default '0' ,  fromUsername TEXT,  toUsername TEXT,  extInfo BLOB, solitaireFoldInfo BLOB, historyId TEXT);

CREATE INDEX textstatusmessageSvrIdIndex ON textstatusmessage ( msgSvrId );
CREATE INDEX textstatusmessageTalkerIndex ON textstatusmessage ( talker );
CREATE INDEX textstatusmessageTalkerStatusIndex ON textstatusmessage ( talker,status );
CREATE INDEX textstatusmessageCreateTimeIndex ON textstatusmessage ( createTime );
CREATE INDEX textstatusmessageCreateTalkerTimeIndex ON textstatusmessage ( talker,createTime );
CREATE INDEX textstatusmessageSendCreateTimeIndex ON textstatusmessage ( status,isSend,createTime );
CREATE INDEX textstatusmessageTalkerTypeIndex ON textstatusmessage ( talker,type );


-- textstatusvideoinfo definition

CREATE TABLE textstatusvideoinfo ( filename text  PRIMARY KEY , clientid text  , msgsvrid int  , netoffset int  , filenowsize int  , totallen int  , thumbnetoffset int  , thumblen int  , status int  , createtime long  , lastmodifytime long  , downloadtime long  , videolength int  , msglocalid int  , nettimes int  , cameratype int  , user text  , human text  , reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text  , videofuncflag int ,masssendid long ,masssendlist text,videomd5 text, streamvideo byte[], statextstr text, downloadscene int, mmsightextinfo byte[], preloadsize int, videoformat int, forward_msg_local_id int,msg_uuid text, share_app_info text, origin_file_name text, had_clicked_video int, media_id text, media_flag text, video_path text, media_cdnid text, video_wxa_info BLOB, weapp_source_username text, msg_talker text, forward_msg_talker text);

CREATE INDEX textstatusvideoinfovideo_status_index ON textstatusvideoinfo ( status,downloadtime );
CREATE INDEX textstatusvideoinfomassSendIdIndex ON textstatusvideoinfo ( masssendid );
CREATE INDEX textstatusvideoinfoLastModifyTimeIndex ON textstatusvideoinfo ( lastmodifytime );
CREATE INDEX textstatusvideoinfo_MediaIdIndex ON textstatusvideoinfo ( media_id  );


-- textstatusvideoinfoVideoHash definition

CREATE TABLE textstatusvideoinfoVideoHash  (size int , CreateTime long, hash text ,  cdnxml text, orgpath text);


-- tmessage definition

CREATE TABLE tmessage ( msgId INTEGER PRIMARY KEY, msgSvrId INTEGER , type INT, status INT, isSend INT, isShowTimer INTEGER, createTime INTEGER, talker TEXT, content TEXT, imgPath TEXT, reserved TEXT, lvbuffer BLOB, transContent TEXT, transBrandWording TEXT , talkerId INTEGER, bizClientMsgId TEXT, bizChatId INTEGER DEFAULT -1, bizChatUserId TEXT, msgSeq INTEGER, flag INT DEFAULT 0, solitaireFoldInfo BLOB, historyId TEXT);

CREATE INDEX tmessageSvrIdIndex ON tmessage ( msgSvrId );
CREATE INDEX tmessageTalkerIndex ON tmessage ( talker );
CREATE INDEX tmessageTalerStatusIndex ON tmessage ( talker,status );
CREATE INDEX tmessageCreateTimeIndex ON tmessage ( createTime );
CREATE INDEX tmessageCreateTaklerTimeIndex ON tmessage ( talker,createTime );
CREATE INDEX tmessageSendCreateTimeIndex ON tmessage ( status,isSend,createTime );
CREATE INDEX tmessageTalkerTypeIndex ON tmessage ( talker,type );


-- TopMsgInfoRecord definition

CREATE TABLE TopMsgInfoRecord (  chatRoomName TEXT,  id INTEGER,  isCancel INTEGER default 'false' ,  topMsgInfoItem BLOB);

CREATE INDEX TopMsgInfoRecord_chatRoomName_index ON TopMsgInfoRecord(chatRoomName);
CREATE INDEX TopMsgInfoRecord_id_index ON TopMsgInfoRecord(id);


-- UDRResource definition

CREATE TABLE UDRResource (  key TEXT PRIMARY KEY ,  projectId TEXT,  name TEXT,  version INTEGER,  url TEXT,  md5 TEXT,  size LONG,  path TEXT,  postPath TEXT,  category INTEGER,  type INTEGER,  createTime LONG,  updateTime LONG,  extId LONG,  signatureKey TEXT,  fileKey TEXT, extInfo BLOB, expireTime LONG, specifiedExtInfo TEXT, virtualPath TEXT, encryptFileSize LONG, encryptIv BLOB, encryptAad BLOB, encryptMd5 TEXT, encryptAlgo INTEGER, encryptTag BLOB, uinMd5 TEXT, encryptKey BLOB, storageType INTEGER);


-- UserCardInfo definition

CREATE TABLE UserCardInfo (  card_id TEXT PRIMARY KEY ,  card_tp_id TEXT,  from_username TEXT,  status INTEGER,  delete_state_flag INTEGER,  local_updateTime LONG,  updateTime LONG,  updateSeq LONG,  create_time LONG,  begin_time LONG,  end_time LONG,  block_mask TEXT,  dataInfoData BLOB,  cardTpInfoData BLOB,  shareInfoData BLOB,  shopInfoData BLOB,  stickyIndex INTEGER,  stickyEndTime INTEGER,  stickyAnnouncement TEXT,  card_type INTEGER default '-1' ,  label_wording TEXT,  is_dynamic INTEGER);

CREATE INDEX stickyIndexIndex ON UserCardInfo ( stickyIndex );


-- userinfo definition

CREATE TABLE userinfo ( id INTEGER PRIMARY KEY, type INT, value TEXT );


-- userinfo2 definition

CREATE TABLE userinfo2 ( sid TEXT PRIMARY KEY, type INT, value TEXT );


-- UserOpenIdInApp definition

CREATE TABLE UserOpenIdInApp (  openId TEXT PRIMARY KEY ,  appId TEXT,  username TEXT);


-- verifycontact definition

CREATE TABLE verifycontact ( id INTEGER PRIMARY KEY, username varchar(40), nickname varchar(40), fullpy varchar(60), shortpy varchar(40), imgflag int, scene int, content text, status int, reserved1 int,reserved2 int,reserved3 text,reserved4 text);

CREATE UNIQUE INDEX verifyContactIndex  ON verifycontact ( username );


-- VideoEditInfo definition

CREATE TABLE VideoEditInfo (  taskId TEXT PRIMARY KEY ,  baseItemData BLOB,  timeStamp LONG,  mixRetryTime INTEGER,  expiredTime LONG,  status INTEGER,  targetWidth INTEGER,  targetHeight INTEGER,  videoBitrate INTEGER,  audioBitrate INTEGER,  audioSampleRate INTEGER,  audioChannelCount INTEGER,  frameRate INTEGER,  videoRotate INTEGER,  extraConfig BLOB,  reportInfo TEXT,  userData TEXT,  location BLOB,  mixFlag INTEGER,  blurBgPath TEXT,  fromScene INTEGER);


-- VideoHash definition

CREATE TABLE VideoHash  (size int , CreateTime long, hash text ,  cdnxml text, orgpath text);

CREATE INDEX VideoHashSizeIndex ON VideoHash ( size  );
CREATE INDEX VideoHashTimeIndex ON VideoHash ( CreateTime  );
CREATE INDEX findervideoinfoVideoHashSizeIndex ON VideoHash ( size  );
CREATE INDEX findervideoinfoVideoHashTimeIndex ON VideoHash ( CreateTime  );
CREATE INDEX textstatusvideoinfoVideoHashSizeIndex ON VideoHash ( size  );
CREATE INDEX textstatusvideoinfoVideoHashTimeIndex ON VideoHash ( CreateTime  );
CREATE INDEX gamelifevideoinfoVideoHashSizeIndex ON VideoHash ( size  );
CREATE INDEX gamelifevideoinfoVideoHashTimeIndex ON VideoHash ( CreateTime  );
CREATE INDEX bizfansvideoinfoVideoHashSizeIndex ON VideoHash ( size  );
CREATE INDEX bizfansvideoinfoVideoHashTimeIndex ON VideoHash ( CreateTime  );
CREATE INDEX zhugemsgvideoinfoVideoHashSizeIndex ON VideoHash ( size  );
CREATE INDEX zhugemsgvideoinfoVideoHashTimeIndex ON VideoHash ( CreateTime  );


-- videoinfo definition

CREATE TABLE videoinfo ( filename text  PRIMARY KEY , clientid text  , msgsvrid int  , netoffset int  , filenowsize int  , totallen int  , thumbnetoffset int  , thumblen int  , status int  , createtime long  , lastmodifytime long  , downloadtime long  , videolength int  , msglocalid int  , nettimes int  , cameratype int  , user text  , human text  , reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text  , videofuncflag int ,masssendid long ,masssendlist text,videomd5 text, streamvideo byte[], statextstr text, downloadscene int, mmsightextinfo byte[], preloadsize int, videoformat int, forward_msg_local_id int, msg_uuid text, share_app_info text, origin_file_name text, had_clicked_video int, media_id text, media_flag text, video_path text, media_cdnid text, video_wxa_info BLOB, weapp_source_username text, msg_talker text, forward_msg_talker text);

CREATE INDEX videoinfo_MediaIdIndex ON videoinfo ( media_id  );


-- videoinfo2 definition

CREATE TABLE videoinfo2 ( filename text  PRIMARY KEY , clientid text  , msgsvrid int  , netoffset int  , filenowsize int  , totallen int  , thumbnetoffset int  , thumblen int  , status int  , createtime long  , lastmodifytime long  , downloadtime long  , videolength int  , msglocalid int  , nettimes int  , cameratype int  , user text  , human text  , reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text  , videofuncflag int ,masssendid long ,masssendlist text,videomd5 text, streamvideo byte[], statextstr text, downloadscene int, mmsightextinfo byte[], preloadsize int, videoformat int, forward_msg_local_id int,msg_uuid text,share_app_info text, origin_file_name text, had_clicked_video int, media_id text, media_flag text, video_path text, media_cdnid text, video_wxa_info BLOB, weapp_source_username text, msg_talker text, forward_msg_talker text);

CREATE INDEX video_status_index ON videoinfo2 ( status,downloadtime );
CREATE INDEX videoinfo2_MediaIdIndex ON videoinfo2 ( media_id  );
CREATE INDEX massSendIdIndex ON videoinfo2 ( masssendid );
CREATE INDEX LastModifyTimeIndex ON videoinfo2 ( lastmodifytime );


-- VideoPlayHistory definition

CREATE TABLE VideoPlayHistory ( filename text PRIMARY KEY, starttime int, playduration int, downloadway int );


-- voiceinfo definition

CREATE TABLE voiceinfo ( FileName TEXT PRIMARY KEY, User TEXT, MsgId INT, NetOffset INT, FileNowSize INT, TotalLen INT, Status INT, CreateTime INT, LastModifyTime INT, ClientId TEXT, VoiceLength INT, MsgLocalId INT, Human TEXT, reserved1 INT, reserved2 TEXT, MsgSource TEXT, MsgFlag INT, MsgSeq INT, MasterBufId INT, checksum INT DEFAULT 0, VoiceFlag INT DEFAULT 0, VoiceInfoExt BLOB , MsgTalker TEXT);

CREATE INDEX voiceinfomsgidindex ON voiceinfo ( MsgId );
CREATE INDEX voice_unfinish_info_index ON voiceinfo ( Status,User,CreateTime );
CREATE UNIQUE INDEX voiceinfouniqueindex ON voiceinfo ( FileName );


-- VoiceTransText definition

CREATE TABLE VoiceTransText (  msgId LONG PRIMARY KEY ,  cmsgId TEXT,  content TEXT default '' );


-- w1w_img_info_table definition

CREATE TABLE w1w_img_info_table ( id INTEGER PRIMARY KEY, msgSvrId LONG, offset INT, totalLen INT, bigImgPath TEXT, thumbImgPath TEXT, createtime INT, msglocalid INT, status INT, nettimes INT, reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text, hashdthumb int DEFAULT 0, iscomplete INT DEFAULT 1, origImgMD5 TEXT, compressType INT DEFAULT 0, midImgPath TEXT, forwardType INT DEFAULT 0, hevcPath TEXT, sendImgType INT DEFAULT 0, msgTalker TEXT , originSourceMd5 TEXT);

CREATE INDEX w1w_img_info_tableserverImgInfoIndex ON w1w_img_info_table ( msgSvrId );
CREATE INDEX w1w_img_info_tableserverImgInfoHdIndex ON w1w_img_info_table ( reserved1 );
CREATE INDEX w1w_img_info_tablemsgLocalIdIndex ON w1w_img_info_table ( msglocalid );
CREATE INDEX w1w_img_info_tableiscomplete_index ON w1w_img_info_table ( iscomplete );
CREATE INDEX w1w_img_info_tableorigImgMD5_index ON w1w_img_info_table ( origImgMD5 );


-- w1wmessage definition

CREATE TABLE w1wmessage (  msgId LONG PRIMARY KEY ,  msgSvrId LONG,  type INTEGER,  status INTEGER,  isSend INTEGER,  isShowTimer INTEGER,  createTime LONG,  talker TEXT,  content TEXT default '' ,  imgPath TEXT,  reserved TEXT,  lvbuffer BLOB,  talkerId INTEGER,  transContent TEXT default '' ,  transBrandWording TEXT default '' ,  bizClientMsgId TEXT default '' ,  bizChatId LONG default '-1' ,  bizChatUserId TEXT default '' ,  msgSeq LONG,  flag INTEGER default '0' ,  fromUsername TEXT,  toUsername TEXT,  extInfo BLOB);

CREATE INDEX w1wmessageSvrIdIndex ON w1wmessage ( msgSvrId );
CREATE INDEX w1wmessageTalkerIndex ON w1wmessage ( talker );
CREATE INDEX w1wmessageTalkerStatusIndex ON w1wmessage ( talker,status );
CREATE INDEX w1wmessageCreateTimeIndex ON w1wmessage ( createTime );
CREATE INDEX w1wmessageCreateTalkerTimeIndex ON w1wmessage ( talker,createTime );
CREATE INDEX w1wmessageSendCreateTimeIndex ON w1wmessage ( status,isSend,createTime );
CREATE INDEX w1wmessageTalkerTypeIndex ON w1wmessage ( talker,type );


-- WalletBankcard definition

CREATE TABLE WalletBankcard (  bindSerial TEXT PRIMARY KEY ,  defaultCardState INTEGER,  cardType INTEGER,  bankcardState INTEGER,  forbidWord TEXT,  bankName TEXT,  bankcardType TEXT,  bankcardTypeName TEXT,  bankcardTag INTEGER,  bankcardTail TEXT,  supportTag INTEGER,  mobile TEXT,  trueName TEXT,  desc TEXT,  bankPhone TEXT,  bizUsername TEXT,  onceQuotaKind DOUBLE,  onceQuotaVirtual DOUBLE,  dayQuotaKind DOUBLE,  dayQuotaVirtual DOUBLE,  fetchArriveTime LONG,  fetchArriveTimeWording TEXT,  repay_url TEXT,  wxcreditState INTEGER,  bankcardClientType INTEGER,  ext_msg TEXT,  support_micropay INTEGER,  arrive_type TEXT,  avail_save_wording TEXT,  fetch_charge_rate DOUBLE,  full_fetch_charge_fee DOUBLE,  fetch_charge_info TEXT,  tips TEXT,  forbid_title TEXT,  forbid_url TEXT,  no_micro_word TEXT,  card_bottom_wording TEXT,  support_lqt_turn_in INTEGER,  support_lqt_turn_out INTEGER,  is_hightlight_pre_arrive_time_wording INTEGER,  card_state_name TEXT,  prompt_info_prompt_text TEXT,  prompt_info_jump_text TEXT,  prompt_info_jump_url TEXT,  yht_related_bank TEXT,  yht_avail_balance LONG,  yht_user_state INTEGER,  yht_system_state INTEGER,  yht_ext_msg TEXT,  minimch_key TEXT,  minimch_avail_balance LONG,  minimch_user_state INTEGER,  minimch_system_state INTEGER,  minimch_ext_msg TEXT);


-- WalletBankcardScene definition

CREATE TABLE WalletBankcardScene (  fakePk INTEGER PRIMARY KEY ,  bindSerial TEXT,  defaultCardState INTEGER,  cardType INTEGER,  bankcardState INTEGER,  forbidWord TEXT,  bankName TEXT,  bankcardType TEXT,  bankcardTypeName TEXT,  bankcardTag INTEGER,  bankcardTail TEXT,  supportTag INTEGER,  mobile TEXT,  trueName TEXT,  desc TEXT,  bankPhone TEXT,  bizUsername TEXT,  onceQuotaKind DOUBLE,  onceQuotaVirtual DOUBLE,  dayQuotaKind DOUBLE,  dayQuotaVirtual DOUBLE,  fetchArriveTime LONG,  fetchArriveTimeWording TEXT,  repay_url TEXT,  wxcreditState INTEGER,  bankcardClientType INTEGER,  ext_msg TEXT,  support_micropay INTEGER,  arrive_type TEXT,  avail_save_wording TEXT,  fetch_charge_rate DOUBLE,  full_fetch_charge_fee DOUBLE,  fetch_charge_info TEXT,  tips TEXT,  forbid_title TEXT,  forbid_url TEXT,  no_micro_word TEXT,  card_bottom_wording TEXT,  support_lqt_turn_in INTEGER,  support_lqt_turn_out INTEGER,  is_hightlight_pre_arrive_time_wording INTEGER,  card_state_name TEXT,  prompt_info_prompt_text TEXT,  prompt_info_jump_text TEXT,  prompt_info_jump_url TEXT,  yht_related_bank TEXT,  yht_avail_balance LONG,  yht_user_state INTEGER,  yht_system_state INTEGER,  yht_ext_msg TEXT,  minimch_key TEXT,  minimch_avail_balance LONG,  minimch_user_state INTEGER,  minimch_system_state INTEGER,  minimch_ext_msg TEXT,  scene INTEGER default '0' );

CREATE INDEX bankcard_scene_index ON WalletBankcardScene(scene);


-- WalletBulletin definition

CREATE TABLE WalletBulletin (  bulletin_scene TEXT PRIMARY KEY ,  bulletin_content TEXT,  bulletin_url TEXT,  is_show_notice INTEGER,  wording TEXT,  left_icon TEXT,  jump_url TEXT,  notice_id TEXT,  type INTEGER default '1' );


-- walletcache definition

CREATE TABLE walletcache ( sid TEXT PRIMARY KEY, type INT, value TEXT );


-- WalletFunciontList definition

CREATE TABLE WalletFunciontList (  wallet_region INTEGER PRIMARY KEY ,  function_list TEXT,  new_list TEXT,  banner_list TEXT,  type_name_list TEXT,  isShowSetting INTEGER);


-- WalletKindInfo definition

CREATE TABLE WalletKindInfo (  wallet_tpa_country TEXT PRIMARY KEY ,  wallet_type INTEGER,  wallet_name TEXT,  wallet_selected INTEGER,  wallet_balance INTEGER,  wallet_tpa_country_mask INTEGER);


-- WalletLuckyMoney definition

CREATE TABLE WalletLuckyMoney (  mNativeUrl TEXT PRIMARY KEY ,  hbType INTEGER,  receiveAmount LONG,  receiveTime LONG,  receiveStatus INTEGER,  hbStatus INTEGER,  sender TEXT,  exclusiveUsername TEXT,  sendId TEXT,  invalidtime INTEGER,  msgSvrId LONG, msgLocalId LONG);


-- WalletPrefInfo definition

CREATE TABLE WalletPrefInfo (  pref_key TEXT PRIMARY KEY ,  pref_title TEXT,  pref_url TEXT,  is_show INTEGER default '1' ,  pref_desc TEXT,  logo_url TEXT,  jump_type INTEGER,  tinyapp_username TEXT,  tinyapp_path TEXT);


-- WalletRegionGreyAreaList definition

CREATE TABLE WalletRegionGreyAreaList (  wallet_region INTEGER PRIMARY KEY ,  wallet_grey_item_buf BLOB);


-- WalletUserInfo definition

CREATE TABLE WalletUserInfo (  uin TEXT PRIMARY KEY ,  is_reg INTEGER,  true_name TEXT,  card_num INTEGER,  isDomesticUser INTEGER,  cre_type INTEGER,  main_card_bind_serialno TEXT,  ftf_pay_url TEXT,  switchConfig INTEGER,  reset_passwd_flag TEXT,  find_passwd_url TEXT,  is_open_touch INTEGER,  lct_wording TEXT,  lct_url TEXT,  cre_name TEXT,  lqt_state INTEGER,  paymenu_use_new INTEGER,  is_show_lqb INTEGER,  is_open_lqb INTEGER,  lqb_open_url TEXT,  lqt_cell_is_show INTEGER,  lqt_cell_icon TEXT,  lqt_cell_is_open_lqt INTEGER,  lqt_cell_lqt_open_url TEXT,  lqt_cell_lqt_title TEXT,  lqt_cell_lqt_wording TEXT,  forget_passwd_url TEXT,  unipay_order_state INTEGER,  bank_priority TEXT,  wallet_balance LONG,  wallet_entrance_balance_switch_state INTEGER,  soter_pay_open_type INTEGER,  authen_account_type INTEGER default '-1' );


-- WebViewData definition

CREATE TABLE WebViewData (  appId TEXT,  appIdKey TEXT PRIMARY KEY ,  value TEXT,  weight TEXT,  expireTime LONG,  timeStamp LONG,  size LONG,  localFile TEXT);


-- WebViewHistory definition

CREATE TABLE WebViewHistory (  recordId TEXT PRIMARY KEY ,  link TEXT,  title TEXT,  source TEXT,  imgUrl TEXT,  timeStamp LONG);


-- WebViewHostsFilter definition

CREATE TABLE WebViewHostsFilter (  host TEXT,  expireTime LONG);


-- WebviewLocalData definition

CREATE TABLE WebviewLocalData (  recordId INTEGER PRIMARY KEY ,  appId TEXT,  domin TEXT,  key TEXT,  value TEXT);


-- WePkgDiffPackage definition

CREATE TABLE WePkgDiffPackage (  pkgId TEXT PRIMARY KEY ,  version TEXT,  oldVersion TEXT,  oldPath TEXT,  md5 TEXT,  downloadUrl TEXT,  pkgSize INTEGER,  downloadNetType INTEGER);


-- WepkgPreloadFiles definition

CREATE TABLE WepkgPreloadFiles (  key TEXT PRIMARY KEY ,  pkgId TEXT,  version TEXT,  filePath TEXT,  rid TEXT,  mimeType TEXT,  md5 TEXT,  downloadUrl TEXT,  size INTEGER,  downloadNetType INTEGER,  completeDownload INTEGER default 'false' ,  createTime LONG,  autoDownloadCount INTEGER default '0' ,  fileDownloadCount INTEGER default '0' );


-- WepkgVersion definition

CREATE TABLE WepkgVersion (  pkgId TEXT PRIMARY KEY ,  appId TEXT,  version TEXT,  pkgPath TEXT,  disableWvCache INTEGER default 'true' ,  clearPkgTime LONG,  checkIntervalTime LONG,  packMethod INTEGER,  domain TEXT,  md5 TEXT,  downloadUrl TEXT,  pkgSize INTEGER,  downloadNetType INTEGER,  nextCheckTime LONG,  createTime LONG,  accessTime LONG default '0' ,  charset TEXT default 'UTF-8' ,  bigPackageReady INTEGER default 'false' ,  preloadFilesReady INTEGER default 'false' ,  preloadFilesAtomic INTEGER default 'false' ,  autoDownloadCount INTEGER default '0' ,  disable INTEGER default 'false' ,  totalDownloadCount INTEGER default '0' ,  packageDownloadCount INTEGER default '0' ,  downloadTriggerType INTEGER default '-1' );


-- WeseeProviderInfo definition

CREATE TABLE WeseeProviderInfo (  weSeeUri TEXT,  time LONG);


-- WxaTokenInfo definition

CREATE TABLE WxaTokenInfo (  token TEXT PRIMARY KEY ,  username TEXT,  uin INTEGER,  appid TEXT);


-- zhugemsgvideoinfo definition

CREATE TABLE zhugemsgvideoinfo ( filename text  PRIMARY KEY , clientid text  , msgsvrid int  , netoffset int  , filenowsize int  , totallen int  , thumbnetoffset int  , thumblen int  , status int  , createtime long  , lastmodifytime long  , downloadtime long  , videolength int  , msglocalid int  , nettimes int  , cameratype int  , user text  , human text  , reserved1 int  , reserved2 int  , reserved3 text  , reserved4 text  , videofuncflag int ,masssendid long ,masssendlist text,videomd5 text, streamvideo byte[], statextstr text, downloadscene int, mmsightextinfo byte[], preloadsize int, videoformat int, forward_msg_local_id int,msg_uuid text, share_app_info text, origin_file_name text, had_clicked_video int, media_id text, media_flag text, video_path text, media_cdnid text, video_wxa_info BLOB, weapp_source_username text, msg_talker text, forward_msg_talker text);

CREATE INDEX zhugemsgvideoinfovideo_status_index ON zhugemsgvideoinfo ( status,downloadtime );
CREATE INDEX zhugemsgvideoinfomassSendIdIndex ON zhugemsgvideoinfo ( masssendid );
CREATE INDEX zhugemsgvideoinfoLastModifyTimeIndex ON zhugemsgvideoinfo ( lastmodifytime );
CREATE INDEX zhugemsgvideoinfo_MediaIdIndex ON zhugemsgvideoinfo ( media_id  );


-- zhugemsgvideoinfoVideoHash definition

CREATE TABLE zhugemsgvideoinfoVideoHash  (size int , CreateTime long, hash text ,  cdnxml text, orgpath text);