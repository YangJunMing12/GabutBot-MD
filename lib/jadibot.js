
let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
let qrcode = require('qrcode')
const fs = require('fs')

listjadibot = [];

const jadibot = async(reply,naze,id) => {
	conn = new WAConnection()
    conn.logger.level = 'warn'
    conn.version = [2, 2143, 3]
    conn.browserDescription = [ 'Numpang', '', '3.5' ]
    conn.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await naze.sendMessage(id,buffer,MessageType.image,{caption:'Scan QR Untuk menjadi bot\n*Rules:*\nQR akan diganti setiap 30 detik'})
    	setTimeout(() => {
       	naze.deleteMessage(id, bot.key)
       },30000)
    })
    conn.on('connecting', () => {
    })
    conn.on('open', () => {
    	reply(`Sukses Jadi BOT\n\n*Device*:\n\n ${JSON.stringify(conn.user,null,2)}`)
    })
    await conn.connect({timeoutMs: 30 * 1000})
    listjadibot.push(conn.user)
    conn.on('chat-update', async (message) => {
        require('../naze.js')(conn, message)
    })
}

const stopjadibot = (reply) => {
	conn = new WAConnection();
	conn.close()
	reply('Sukses stop jadibot')
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}