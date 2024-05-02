const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "254701776716" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254701776716";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_31_05_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMSxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDQxLFxuICAgICAgICA1NyxcbiAgICAgICAgMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMixcbiAgICAgICAgMTEyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwLFxuICAgICAgICA4MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgODYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzLFxuICAgICAgICA5NixcbiAgICAgICAgMTgxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDk0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI0LFxuICAgICAgICA4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwienBSd1YvUVNvUUNsYXZTWTBKYUN0QUwwNERPR1VVTHdlcktSSmdjeHFIYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYTFMeHFmdnpSY0twb3FiN2l5MnBOUVwiLFxuICBcInBob25lSWRcIjogXCJiNjcxY2NjNi1hZjEyLTQ1YmQtYWIxZi0zMTMwNjI0ZDFkMTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMTM4LFxuICAgICAgMTIsXG4gICAgICA2MyxcbiAgICAgIDEyOSxcbiAgICAgIDE3NCxcbiAgICAgIDI0NSxcbiAgICAgIDExNixcbiAgICAgIDE0OCxcbiAgICAgIDE1MSxcbiAgICAgIDIzMSxcbiAgICAgIDU3LFxuICAgICAgMTUxLFxuICAgICAgMTQ5LFxuICAgICAgMTQzLFxuICAgICAgMTA3LFxuICAgICAgMTcwLFxuICAgICAgMTk5LFxuICAgICAgMjE4LFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDI0NSxcbiAgICAgIDMzLFxuICAgICAgMTkwLFxuICAgICAgNSxcbiAgICAgIDIzNCxcbiAgICAgIDIzMixcbiAgICAgIDQxLFxuICAgICAgMTU5LFxuICAgICAgMTI5LFxuICAgICAgODEsXG4gICAgICA0NCxcbiAgICAgIDY5LFxuICAgICAgMTEwLFxuICAgICAgMzUsXG4gICAgICAyMTMsXG4gICAgICAxNTksXG4gICAgICA1OSxcbiAgICAgIDE2MCxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2FoNmY0Q0VQYnl6YkVHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2UUlENWhtYmg0WEtvOFVBUG5sOU0xT0tGQlJidVU2MGEyRmVxRjgrTEhzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJsMkllTktVVHhVbDNQcnZlQm4raTMwRXIwMStZQ0laSjVSK3VaYVh5ZlNMaXhYRHFvSWUyaldyUGNvUTlURWNZSEx3MjBET3owZ05mMjN4ZXV6eURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFLNndhMVRYZDMrcCtpVEtoWDlZMDVsT0xzNkRhdFJZdHJVTDJ6VFhibXBXT2RHSVNZT3JPWWtBUjFSeC9tYURnSFpwZlR6Qit0d25vc01CZUhCOURnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzAxNzc2NzE2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODc5Mzk0NDc0MjczMjE6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiw4VsbMOjw7HDscO2w7RcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwMTc3NjcxNjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0NjQ5NDY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHdrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFId2ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6SXpHV2VONURFekUyL0NIZTFCWVA0ckJQWnZRb05pVFh2WVdkRmh5WWQwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgwMjgzNjY0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA5MDQ2NDExMjMwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSHdrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRjZ2YnlMcGw4SjFDQXFVRWNiQ1JnNVRhWU5RNS9zK1dReFlVQnI1WndPOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MDI4MzY2NDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTYzOTA1NjY3MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh3bC5qc29uIjogIntcImtleURhdGFcIjpcIitoT0U4VEkwbXI2VTYydkJ1VDFXTlRkRUJOZFZYM2VablM1Y2s0bXVFY0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODAyODM2NjQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFId20uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJST2xTS1Q2VG1ORU9NY3IxZFZqZFZIQUxLTTROTzZyb1BYT3Bic2dDQzZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgwMjgzNjY0NixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQ2NDU0Mjk0MTdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFId24uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzY2tFclhSdE5QTUpnMmtDaXVnclpnUC93bWVySnhqc01TRjgvOXErdHZnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgwMjgzNjY0NixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQ2NDk0MjcxODhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "allanoo",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "allan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
