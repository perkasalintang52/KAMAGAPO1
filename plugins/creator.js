let handler = async(m, { conn }) => {
  let name = m.sender
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6281322577123@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${owner[0]}`, `${await conn.getName(owner[0]+'@s.whatsapp.net')}`, `ð Developer Bot `, `ð« Don't call me ð¥º`, `joceylintang12345@gmail.com`, `ð®ð© Indonesia`, `ð https://www.instagram.com/joceylintangg/`, `ð¤ Gada pawang nih senggol dong ð`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `ð¥ Bot WhatsApp ð£`, `ðµ Don't spam/call me ð¢`, `Nothing`, `ð®ð© Indonesia`, `ð https://www.tiktok.com/@joceylintangg/`, `ð¤ Hanya bot biasa yang kadang suka eror âº`]
  ], fkonn) 
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya kað`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${owner[0]}`, `${await conn.getName(owner[0]+'@s.whatsapp.net')}`, m) 
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kakð`, sentMsg, {mentions: [m.sender]})
  }
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner)$/i

module.exports = handler

