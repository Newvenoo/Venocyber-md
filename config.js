//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://wa.me/message/SHUL2VJTYOORM1";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "2348155078270";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZSRzV5U0FwMndxWkI3MTQ3WFVwUW5OYXIyeVZ3OHhML0FBUG8wVnltZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVFweUJWNE9FSVZEUXhsekFDNDVvSk96cWJPdkxyU0RaWWdXQUN3bEZRcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzT2VnLzRSbWNSS1NiQit2YW5vMGkyNXhJOWNsVUpJamxmMjA2dUdHTkhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtZWVpMlRsbkUzczVEZmRqeS81c2RFa3oxdXV1TCtKUmtXRjVhVkxxcmhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFBN3dhaUpRMlJaUk5selh1a3pub1V0UEg2VFMwMWZoU3BYZ3BiZkl3MWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBKWEU0UkVOYkFxenpFWWxFZHNMRFoyd0lGeUJFc2ZScXUvNytzOW1JaU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZqRVQzODkyY1J2NGs0OEFzOXRNREJiTkxaOFZxaTRYS08rZldFNGgwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3graDdQNTlXUUVvMlRsWVZLTll0RDRYbS9PcW5ycjcxNzZkNUhCb1hUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM1emhucGV5T1lUNWZDeVBDZ2Q1Vm56Wlp6bEJuaFBIeWMzSVZHcWI4MU10OWY4OW84VUFkVTZDd2hFckN2aS8rd3M0Z2ZGQ04rMDEvakxXeFh6a0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiJncnA3YlY4NUx0ZHRsN2k5b0ZVS2RaYklkUzY1d21ZZEd0MHFSOFM3M0Q4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNTUwNzgyNzBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODE4MzJDRkFCM0UxOERENTg2M0NFMDdEMjA3NDY5MjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDgxMDk0Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVkFiaWptWUlULVdKTkdPVEFvd3F3ZyIsInBob25lSWQiOiI2Y2U1YzhlNy04ZWJkLTQ2MGYtYThkNS00M2M0ZjdiNmQ4NjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUS9BVTFGQmhta3F3TC94RkhTdTZGQ05nSTdzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino3aU9aVEVSdXZlWktDZ2VTZkVWK1c2am5nbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJBSEFUV1hWWSIsIm1lIjp7ImlkIjoiMjM0ODE1NTA3ODI3MDo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1hcnZlbCBNZW1lcyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXp0bzBrUXJmdkZ0QVlZQkNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTG1hM2dBdUQ0OVR0MTZYeDNHN05FVEJ6SmRxRVpvZzhQdlZMbDJCWXZUWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicjhlVmVEbkp3VWxhazMwTkhPdzRPaG5uSi92L3VLcWpNOGQ1elVaaG5UeEVaT0g3c0tadDh2KzZkaTBhMHhPODFvb2xHS1dFU1cwbDNuS203dFFnQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImI4SkNNRFZmNGVocEErWDFOZlRwRUl5NUxUUnBFYUdHbmdCeXhONTNrQ0g4WnlXQmhXSTZKbEtQRUN5bDhEYldMZUpRSlE0cG1HRUFya1pUYUZqV0FRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE1NTA3ODI3MDo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlM1bXQ0QUxnK1BVN2RlbDhkeHV6UkV3Y3lYYWhHYUlQRDcxUzVkZ1dMMDIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA4MTA5MzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTEowIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "GAY BOY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
