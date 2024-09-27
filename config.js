const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348124273080";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_40_09_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyLFxuICAgICAgICA1MixcbiAgICAgICAgMTE4LFxuICAgICAgICA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI5LFxuICAgICAgICA4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg1LFxuICAgICAgICA0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDcwLFxuICAgICAgICA4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUwLFxuICAgICAgICAzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MSxcbiAgICAgICAgNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDc4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU1LFxuICAgICAgICA3MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDY4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYnl0c2JlOThWczhZelBHaFhZSTZQZDVtT2UvdG13MUpROVpmUHExeWVNRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidk95OVBmMmVSX0t3UTBGcy1fdUpvQVwiLFxuICBcInBob25lSWRcIjogXCJjMWNlZjNmMC0xMzZkLTQ5NTYtYTU4MS05NzMwZmMxYzAxMGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAxNTcsXG4gICAgICAxMTIsXG4gICAgICA5OSxcbiAgICAgIDI2LFxuICAgICAgNTAsXG4gICAgICAyNDgsXG4gICAgICAzMCxcbiAgICAgIDEzOCxcbiAgICAgIDgxLFxuICAgICAgNSxcbiAgICAgIDIyMCxcbiAgICAgIDE2NSxcbiAgICAgIDY4LFxuICAgICAgMTk4LFxuICAgICAgMTk5LFxuICAgICAgMixcbiAgICAgIDc0LFxuICAgICAgMTIyLFxuICAgICAgMTk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgMjE5LFxuICAgICAgMzQsXG4gICAgICAxMjQsXG4gICAgICAxMSxcbiAgICAgIDExMyxcbiAgICAgIDExLFxuICAgICAgMjM3LFxuICAgICAgMTI0LFxuICAgICAgMTU1LFxuICAgICAgMTk0LFxuICAgICAgMTEzLFxuICAgICAgNjgsXG4gICAgICAxNzUsXG4gICAgICA3MSxcbiAgICAgIDIyNSxcbiAgICAgIDY3LFxuICAgICAgMTUwLFxuICAgICAgOTgsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjFCRE5FVzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjQyNzMwODA6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTZXVuLiBQaG9lbml4XCIsXG4gICAgXCJsaWRcIjogXCIyMTAyMjE2NzA2Mjk1MDg6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXFDOElnRUVQK1cycmNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOSjFIOVFCOU9CTlhjWkcyTHBMVGNRVHc3dG9VNkVUeFl1WXR3RWFaSURBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhTV2tjaUFreEVIRUtHSjMvYkZ6aTM1SWZ2QlJxa09rWlA1U0tEZDNyZXEvWkc5bUJKY3AvWXc1dkgzeUZFT2hrcXcyamIyc1JWK25kcGxrOEVkWWlnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhUTWp4UlVUU2pGNitYYUdicDFQZU81WEFqY2N2K1MwdHNheW82S0NDZGNZMEZyTS95VTh2enFyTFhnZXd5UnlxL1hnZFRaV2R6UTUyOFF5Njl1QkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjQyNzMwODA6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3NDMzNjAzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
