/**
   * Create By Dika Ardnt.
   * Recode By ArieTube
   * Contact Me on wa.me/6285828357727
   * subscribe : https://m.youtube.com/channel/UC0rPHvwr0sJtaccF8Mm1Xng
   * Active SC by : 𝚇𝚝𝚛𝚊𝚠
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'woaibeijingtiananmen',
}

// Configuration BOT

global.owner = ['6285159907432'] //Nomor lu
global.premium = ['6285159907432'] //Nomor lu
global.packname = '𝚇𝚝𝚊𝚠𝚅𝙱𝚘𝚝𝚣-MD' //Nama bot lu utk wm stiker
global.author = '𝚇𝚝𝚛𝚊𝚠-𝚢𝚛2' //Nama lu utk wm stiker
global.sessionName = '𝚅𝙱𝚘𝚝𝚣' //Nama session
global.prefa = ['','!'*'.','🐦','🐤','🗿'] //Prefix bot serah lo mau ubah atau ga
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Sabar cukk :D',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 30
}
global.thumb = fs.readFileSync('./lib/arietube.jpg')
global.vitube = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

//Jangan diubah nanti bisa eror nangis
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
