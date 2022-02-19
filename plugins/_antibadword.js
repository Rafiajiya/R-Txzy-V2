let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = m => m

let badwordRegex = nsjajabjdododowowjdnfkfofodknebdkdkffj // tambahin sendiri
handler.before = function (m, { isOwner, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = db.data.chats[m.chat]
    let user = db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)

    if (!chat.badword && !chat.isBanned && isBadword) {
        user.warning += 1
        this.send2Button(m.chat, `banh toxic bener dh)
        if (user.warning >= 5) {
            user.banned = false
            if (m.isGroup) {
                if (isBotAdmin) {
                    // this.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
                }
            }
        }
    }
    return !0
}
module.exports = handler
