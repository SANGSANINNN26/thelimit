const infobot = (latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) => {
return `ℒ⃝👾 *B O T  S T A T I S T I C*

あ *Owner : @${ownerNumberrr.split('@')[0]}*
あ *Group Chat : ${giid.length}*
あ *Personal Chat : ${totalchat.length - giid.length}*
あ *Total Chat : ${totalchat.length}*
あ *Speed : ${latensii.toFixed(4)} Second (s)* 
あ *Runtime : ${kyun(runtime)}*


ℒ⃝あ *P H O N E  S T A T I S T I C*

あ *WhatsApp V : ${wa_version}*
あ *RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
あ *MCC : ${mcc}*
あ *MNC : ${mnc}*
あ *OS Version : ${os_version}*
あ *Merk Hp : ${device_manufacturer}*
あ *Versi Hp : ${device_model}*


ℒ⃝あ *C O N N E C T  W I T H  M E*

⛎ mobile legend : SANG SANINNN
♈ YouTube : youtube.com/c/AnangGamteng
♉ Github : SANGSANINNN26.github.io
♊ Instagram : instagram.com/ananglimit26
♋ Tiktok : tiktok.com/@AnangGamteng
♌ Telegram : t.me/AnangGamteng
♎ Ch Telegram : t.me/Anang_Gamteng
♏ WhatsApp : wa.me/6281267439077?text=Halo+Bang+Anang+Gamteng
`}

exports.infobot = infobot
 
