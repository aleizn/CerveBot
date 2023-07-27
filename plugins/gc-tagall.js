let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴 :* ${pesan}`
let teks = `*⺀𝙱𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚘 𝚊 𝚕𝚊 𝚛𝚎𝚟𝚘𝚕𝚞𝚌𝚒𝚘́𝚗 𝚍𝚎 𝚎𝚜𝚝𝚎 𝚌𝚕𝚊𝚗⺀*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┣🎃 @${mem.id.split('@')[0]}\n`}
teks += `└𝐂𝐄𝐑𝐕𝐄𝐁𝐎𝐓`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler