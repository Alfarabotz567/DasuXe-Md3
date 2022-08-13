//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = true // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6285624823115'] //masukin no owner nya
global.ownername = "Alfarabotz-MD"
global.ytname = "YT: HimHia Channel" //ur yt chanel name
global.socialm = "GitHub: Alfarabotz567" //ur github or insta name
global.location = "Indonesia, Jawabarat, Tasikmalaya" //ur location

//bot bombdy
global.botname = "Alfarabotz-MD" //ur bot name
global.websitex = "https://bit.ly/Dhaffwebsite_my-id" //ur website
global.vidmenu = { url: 'https://a.uguu.se/cGTmXoBd.mp4'' } //gif and video menu
global.packname = "Alfarabotz Stickers\n\n\n\n\n\n\n🕊️🕊️ "
global.author = "Irfaan Official" 
global.themeemoji = "🕊️"
global.reactmoji = "🐣"
global.ownertag = ['6289531704997','6285624823115'] //ur owner tag
global.ownernummenu = ['6289531704997','6285624823115'] //ur owner number in menu and all
global.watermark = "Alfarabotz-MD." //ur watermark
global.botscript = "https://github.com/Dhaffnavyz/BaseBotMd-Origin"
global.linkz1 = "https://chat.whatsapp.com/CMJv1GXTUht1A1be7ocTY2"
global.linkz2 = "https://chat.whatsapp.com/JoOb7t2PVMv08w4dlfwJBH"

//Bot theme media
global.thum = fs.readFileSync("./Galery/theme/DNP77picture.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Galery/theme/DNP77picture.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Galery/theme/DNP77picture.jpg") //ur error pic
global.thumb = fs.readFileSync("./Galery/theme/DNP77picture.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.sessionName = "sessionnya"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Done✓',
    admin: 'Fitur ini hanya untuk admin!',
    botAdmin: 'Bot Harus Admin Dulu!',
    owner: 'Fitur ini hanya untuk Owner',
    group: 'Fitur ini hanya untuk grup!',
    private: 'Fitur ini hanya untuk obrolan pribadi!',
    bot: 'Fitur ini hanya untuk bot',
    wait: 'Dalam proses...',
    linkm: 'Dimana linknya?',
    error: 'Kesalahan!',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'Fitur nsfw belum diaktifkan, silahkan hubungi admin untuk mengaktifkan',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
global.limitawal = {
    premium: "Infinity",
    free: 100,
    monayawal: 10000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
