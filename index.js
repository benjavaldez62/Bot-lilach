const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on("ready", () => {
  client.user.setPresence({
    status: "online",
    game: {
        name: "osu! with kukitai and blacklight846",
        url: "https://www.twitch.tv/kunori",
        type: "STREAMING"
    }
});

   console.log("Estoy listo!");
});

client.on("message", (message) => {
if (message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let embedc = 0x965DEC

  if(message.content.startsWith("duck game")) {
    message.channel.send("NO ES TU AMIGO")

  }if(message.content.startsWith("@!417759500829720576")) {
    message.channel.send(message.mention)

  }if(message.content.includes("F")) {
  message.react("🇫")

  }if(message.content.startsWith("Venya")) {
    message.channel.send("<@!417759500829720576>")

  }if(message.content.startsWith("13")) {
    message.channel.send("<:abrahamr:570109386161389569>")

    //Emojis

  }if(message.content.startsWith(":abrahamr:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:abrahamr:570109386161389569>")

  }if(message.content.startsWith(":lilach:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:lilach:568320679288504330>")

  }if(message.content.startsWith(":UpdateReady:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:UpdateReady:500943019394990090>")

  }if(message.content.startsWith(":pacman:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:pacman:475497414745260032>")
  
  }if(message.content.startsWith(":xmas:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:xmas:517815931095875614>")

  }if(message.content.startsWith(":pedro:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:pedro:517815395965730837>")

  }if(message.content.startsWith(":benja:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:benja:527017198238302208>")

  }if(message.content.startsWith(":uwu:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:uwu:508531987984678923>")

  }if(message.content.startsWith(":pedrov3:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:pedrov3:529054636989087757>")

  }if(message.content.startsWith(":omegapacman_enojado:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:omegapacman_enojado:475492190207082519>")

  }if(message.content.startsWith(":catgirl_patch_thumbsup:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:catgirl_patch_thumbsup:476243769855967242>") 

  }if(message.content.startsWith(":catgirl_patch_wave:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:catgirl_patch_wave:476243914446077962>")

  }if(message.content.startsWith(":volando:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:volando:476216742490800148>")

  }if(message.content.startsWith(":EosGasam:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:EosGasam:475528324936892436>")

  }if(message.content.startsWith(":ahegao:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:ahegao:475702835732807680>")

  }if(message.content.startsWith(":rid:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:rid:475490835165741057>")

  }if(message.content.startsWith(":finger:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:finger:475529296425779210>")

  }if(message.content.startsWith(":AwooRainbow:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:AwooRainbow:476230724731535373>")

  }if(message.content.startsWith(":tulatu:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:tulatu:566402500958224395>")

  }if(message.content.startsWith(":no_lo_se:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:no_lo_se:490614447728099338>")

  }if(message.content.startsWith(":read:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:read:491004214391210005>")
  
  }if(message.content.startsWith(":santolo:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:santolo:566402500878401536>")

  }if(message.content.startsWith(":quejue:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:quejue:566402496805732372>")

  }if(message.content.startsWith(":pomelo:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:pomelo:517817976561336320>")

  }if(message.content.startsWith(":patch:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:patch:566402504221523998>")

  }if(message.content.startsWith(":coca_cola:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:coca_cola:566402506519871498>")

  }if(message.content.startsWith(":Ohno:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:Ohno:566402486324297769>")

  }if(message.content.startsWith(":NitroThink:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:NitroThink:566402490170605598>")

  }if(message.content.startsWith(":mdn:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:mdn:517814117399003165>")

  }if(message.content.startsWith(":mcm:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:mcm:517814321909202954>")

  }if(message.content.startsWith(":koishi:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:koishi:566402504334639129>")

  }if(message.content.startsWith(":MadokaLewd:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:MadokaLewd:500944555781128192>")

  }if(message.content.startsWith(":dedo_think:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:dedo_think:517813936696066058>")

  }if(message.content.startsWith(":dedo_knife:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:dedo_knife:517813929368616960>")

  }if(message.content.startsWith(":dedo:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:dedo:517813917527834644>")

  }if(message.content.startsWith(":4k:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:4k:566402498760540160>")

  }if(message.content.startsWith(":happy:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:happy:566411631894986753>")

  }if(message.content.startsWith(":ReallySee:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:ReallySee:566770722886909952>")

  }if(message.content.startsWith(":Fierroswey:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:Fierroswey:500942568008318976>")

  }if(message.content.startsWith(":hielardo:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:hielardo:566402502560448512>")

  }if(message.content.startsWith(":grancisco:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:grancisco:566402498190114817>")

  }if(message.content.startsWith(":nouinfinite:")) {
    message.channel.bulkDelete(1);
    message.channel.send("<:nouinfinite:566770725222875165>")

  }if(message.content.startsWith("PERO")) {
    message.channel.send("Aaaaaaaah <:coca_cola:566402506519871498>")

    //

  }if(message.content.startsWith("Duck game")) {
    message.channel.send("NO ES TU AMIGO");

  }if(message.content.startsWith("Duck Game")) {
    message.channel.send("NO ES TU AMIGO");
 
  }if(message.content.startsWith("hola hentai bot")) { 
    message.channel.send("hola wenas tardes *voz de helio*")

  }if(message.content.startsWith("Hola hentai bot")) { 
    message.channel.send("hola wenas tardes *voz de helio*")
  
  }if(message.content.startsWith("alejandro")) {
    message.channel.send("no wn, ese tipo si que es goi xd")

  }if(message.content.startsWith("Alejandro")) {
    message.channel.send("No we, ese tipo si que es goi xd")

  }if(message.content.startsWith("ALEJANDRO")) {
    message.channel.send("No we, ese tipo si que es goi xd")

  }if(message.content.startsWith("benia")) {
    message.channel.send("Está bien joto porque se la come así mismo")

  }else
  if(message.content.startsWith("Benia")) {
    message.channel.send("Está bien joto porque se la come así mismo")

  }if(message.content.startsWith("BENIA")) {
    message.channel.send("Está bien joto porque se la come así mismo")

  }if(message.content.startsWith("Nitro")) {
    message.channel.send("Ahora mismo llamo a tu mamá y le digo que estás robando dulces")

  }if(message.content.startsWith("risas")) {
    message.channel.send("ｗｗｗ")

  }if(message.content.startsWith("Risas")) {
    message.channel.send("ｗｗｗ")
 
  }if(message.content.startsWith("LLÁBA")) {
    message.channel.send("Java Script mrkiki")

  }if(message.content.startsWith("LLABA")) {
    message.channel.send("Java Script mrkiki")

  }if(message.content.startsWith("pito")) {
    message.channel.send(":banana:")

  }if(message.content.startsWith("Pito")) {
    message.channel.send(":banana:")

  }if(message.content.startsWith("hola")) {
    message.channel.send("qlq mardito mmgvo")

  }if(message.content.startsWith("hello")) {
    message.channel.send("Good Morning (´・◡・｀)")

  }if(message.content.startsWith("Hello")) {
    message.channel.send("Good Morning (´・◡・｀)")

  }if(message.content.startsWith("HELLO")) {
    message.channel.send("Good Morning (´・◡・｀)")

  }if(message.content.startsWith("*c lo cosha sin condon")) {
    message.channel.send("Bienvenido al mundo del sida kbron -UnWeCualquiera")

  }if(message.content.startsWith("Hola")) {
    message.channel.send("qlq mardito mmgvo")

  }if(message.content.startsWith("HOLA")) {
    message.channel.send("qlq mardito mmgvo")

  }if(message.content.startsWith("._.")) {
    message.channel.send("._:")

  }if(message.content.startsWith("._:")) {
    message.channel.send("._.")

  }if(message.content.startsWith(":_.")) {
    message.channel.send("._:")

  }if(message.content.startsWith(":_:")) {
    message.channel.send("._.")

  }if(message.content.startsWith("hmm")) {
    message.channel.send("*Thinking*")

  }if(message.content.startsWith("Hmm")) {
    message.channel.send("*Thinking*")

  }if(message.content.startsWith("HMM")) {
    message.channel.send("*THINKING*")

  }if(message.content.startsWith("Abr la Pixula")) {
    message.channel.send("*le muestra la pixula*")

  }if(message.content.startsWith("abr la pixula")) {
    message.channel.send("*le muestra la pixula*")

  }if(message.content.startsWith("Abr la pixula")) {
    message.channel.send("*le muestra la pixula*")

  }if(message.content.startsWith("abr la Pixula")) {
    message.channel.send("*le muestra la pixula*")

  }if(message.content.startsWith("huh?")) {
    message.channel.send("*Question mark*")

    //Comandos de Respuesta

  }if(message.content.startsWith(prefix + "hart")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/551692303321006115/geiii.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "felicidad")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554208409180962817/geeee.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "lame")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554208584381104128/lcik.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "nepe")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/BRG4QCNjQt2g2VAro5Aeww.jpg`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "kyt")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/GFpaYBSfQiaF357bZWD_wQ.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "snou")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/BoERi9ofRv6hZW-vG_pRIQ.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "asco")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/IAADX7jXTSaGcndMjrdd9w.jpg`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "calma")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/K97G0TZzQme-uJGkAc4kBg.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "calmense")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/vhWNsQ5pSGWu2RjTidKzkQ.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "frente")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/7ry9FjDrRc_AYt3q6YZFWA.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "hielo")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/p0XFbN5yRc225jKpEqwhMw.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "saludo")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/aeBqb_GSSduK8PhTUP4LFg.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("Tabletless")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/d1og5-1OSB2Oncpsgg65KQ.png`)
    .setColor(embedc)
    message.channel.send({ embed });
    
  }if(message.content.startsWith("tabletless")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/d1og5-1OSB2Oncpsgg65KQ.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("TabletLess")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/d1og5-1OSB2Oncpsgg65KQ.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "lewd")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/469424478489935872/532982242398699540/JPEG_20180609_183559.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "arrows")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/vnVtjC0_Ti6i_ysrk8kWlA.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "riko")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/nI_GcJd_QTGw-_59fqDGsA.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "llaba")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/ibN28fxXQ-etHkNEpzBzRA.png`)
    .setColor(embedc)
    message.channel.send({ embed });
  
  }if(message.content.startsWith(prefix + "marrano")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/PNjUXAnVSDaX64IMv7_ZAQ.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "getando")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/yaWccqW6R8q2uPIn0ptOTQ.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "fc")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/UBK1Oi28QNuFtkCk0vC4PQ.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "globo")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/8UlSOMGhQMev3EFtuzDpmw.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "dimons")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/m9UYk3peSs6V-clEKnDayw.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "quiensoy")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/0aRqUS81ShGMqN7Akfr4zA.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "muntaste")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/8gqkbnjHSjejKzXRjpvc2w.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "gie")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/gneiSoJhQnqQiQsyuTgj7w.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "fortnite")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/FEPwtlVLT2K3ame9uLtaRQ.gif`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "joto")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/Gws8GY9_QRSHwW-DXnuhnw.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "bucle")) {
    const embed = new Discord.RichEmbed()
    .setImage("https://image.prntscr.com/image/Mubal0h5TeGPbhZfGZ3-lQ.png")
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "tellme")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554213464831164426/geeeeeeee.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "beibi")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554213903249440768/geeeee.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "hot")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554214519174332449/2019-01-22_2.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "pedoz")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554215118943158298/mic.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "ojear")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/JS6sff7CTg65PT6dEFYOSQ.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "wapa")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554215533910949888/000000001.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "ajax")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/I6KpcvnkS9WQDJ21S8QeFg.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "perro")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/_g0sHaB1RDWrFoV1oyuM9w.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "pato")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/ienXOKE-SHaG7wM0olzUcQ.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "rock")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/MHVg2DwYR4WaiMiQkIbifQ.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith(prefix + "triggered")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://media1.tenor.com/images/9543655e42222c2ba2eea8da45e328bc/tenor.gif?itemid=5943310`)
    .setColor(embedc)
    message.channel.send({ embed })

  }if(message.content.startsWith(prefix + "rick")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://media.discordapp.net/attachments/508525841400201224/551117608418803712/536633433728876565.gif`)
    .setColor(embedc)
    message.channel.send({ embed })

  }if(message.content.startsWith(prefix + "mexicano")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/TlyM1aP3QJ_BovBPdSzDsw.png`)
    .setColor(embedc)
    message.channel.send({ embed })

  }if(message.content.startsWith(prefix + "brazzers")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/d7xM3hrDSkKHMM_veQRVwg.png`)
    .setColor(embedc)
    message.channel.send({ embed })

  }if(message.content.startsWith(prefix + "arabe")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/r6u9QdY_QMGA2ll6jqNReQ.jpg`)
    .setColor(embedc)
    message.channel.send({ embed })

  }if(message.content.startsWith(prefix + "pito")) {
    const embed = new Discord.RichEmbed()
    .setImage("https://image.prntscr.com/image/emUttkPCRfGpwqzTJulvRQ.jpg")
    .setColor(embedc)
    message.channel.send({ embed })

  }if(message.content.startsWith(prefix + "buzz")) {
    const embed = new Discord.RichEmbed() 
    .setImage("https://image.prntscr.com/image/ubx0AW4gS1urZrWreWj8ZQ.jpg")
    .setColor(embedc)
    message.channel.send({ embed })

  }if(message.content.startsWith("a ver")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/469424478489935872/531698831461711873/5d21f1d9-a37e-44a1-8f46-abd7f70a6177.png`)
    .setColor(embedc)
    message.channel.send({ embed });
    
  }if(message.content.startsWith("A ver")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/469424478489935872/531698831461711873/5d21f1d9-a37e-44a1-8f46-abd7f70a6177.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("Avr")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/469424478489935872/531698831461711873/5d21f1d9-a37e-44a1-8f46-abd7f70a6177.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("avr")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/469424478489935872/531698831461711873/5d21f1d9-a37e-44a1-8f46-abd7f70a6177.png`)
    .setColor(embedc)
    message.channel.send({ embed });
    
  }if(message.content.startsWith("abr")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/469424478489935872/531698831461711873/5d21f1d9-a37e-44a1-8f46-abd7f70a6177.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("Abr")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/469424478489935872/531698831461711873/5d21f1d9-a37e-44a1-8f46-abd7f70a6177.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("*c va volando*")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/wAOh5MMSTiOivXw6HrEzgg.jpeg`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("oh yes")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/475328011936464917/532964856182079528/image0.jpg`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("Oh yes")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/475328011936464917/532964856182079528/image0.jpg`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("Oh Yes")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/475328011936464917/532964856182079528/image0.jpg`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("OH YES")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/475328011936464917/532964856182079528/image0.jpg`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("oh no")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/475328011936464917/532400678375522304/unknown.png`)
    .setColor(embedc)
    message.channel.send({ embed });
  
  }if(message.content.startsWith("Oh no")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/475328011936464917/532400678375522304/unknown.png`)
    .setColor(embedc)
    message.channel.send({ embed });
  
  }if(message.content.startsWith("Oh No")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/475328011936464917/532400678375522304/unknown.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("OH NO")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/475328011936464917/532400678375522304/unknown.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("Huh?")) {
    message.channel.send("*Question mark*")

  }if(message.content.startsWith("ons?")) {
    message.channel.send("Doce")

  }if(message.content.startsWith("Ons?")) {
  message.channel.send("Doce")

  }if(message.content.startsWith("ONS?")) {
  message.channel.send("DOCE")

  }if(message.content.startsWith("oniichan")) {
    message.channel.send("When 7kpp? <@!342398723491627021>")

  }if(message.content.startsWith("Oniichan")) {
    message.channel.send("When 7kpp? <@!342398723491627021>")

  }if(message.content.startsWith("OniiChan")) {
    message.channel.send("When 7kpp? <@!342398723491627021>")

  }if(message.content.startsWith("ese negro no es educado")) {
    message.channel.send("educao el qlo tuyo")

  }if(message.content.startsWith("onii-chan")) {
    message.channel.send("When 7kpp? <@!342398723491627021>")

  }if(message.content.startsWith("Onii-chan")) {
    message.channel.send("When 7kpp? <@!342398723491627021>")

  }if(message.content.startsWith("Onii-Chan")) {
    message.channel.send("When 7kpp? <@!342398723491627021>")

  }if(message.content.startsWith("OOF")) {
    message.channel.send("UUF PAPITO WIKITIWIKITI")

  }if(message.content.startsWith("Ban")) {
    message.channel.send("4 u (´・◡・｀) ｗｗｗ")

  }if(message.content.startsWith("ban")) {
    message.channel.send("4 u (´・◡・｀) ｗｗｗ")
  
  }if(message.content.startsWith("kyc")) {
    message.channel.send("No u")

  }if(message.content.startsWith("Kyc")) {
    message.channel.send("No u")

  }if(message.content.startsWith("why?")) {
    message.channel.send("Why not?")

  }if(message.content.startsWith("Why?")) {
    message.channel.send("Why not?")

  }if(message.content.startsWith("why not?")) {
    message.channel.send("Because not")

  }if(message.content.startsWith("Why not?")) {
    message.channel.send("Because not")

  }if(message.content.startsWith("zorro")) {
    message.channel.send("¡Zorro no te lo lleves!")

  }if(message.content.startsWith("Zorro")) {
    message.channel.send("¡Zorro no te lo lleves!")

  }if(message.content.startsWith("Holy Shit! It's Airman!!")) {
  message.channel.send("¡¡EL HOMBRE AIRE!!, CORRAN D:")

  }if(message.content.startsWith("Los megas en")) {
    message.channel.send("Ve a chorear el wifi del vecino, que tampoco es tan difícil.")

  }if(message.content.startsWith("los megas en")) {
    message.channel.send("Ve a chorear el wifi del vecino, que tampoco es tan difícil.")

  }if(message.content.startsWith("en")) {
    message.channel.send("Oesao el en")

  }if(message.content.startsWith("En")) {
    message.channel.send("Oesao el en")

  }if(message.content.startsWith("GG")) {
    message.channel.send("EZ PZ")

  }if(message.content.startsWith("*c va*")) {
    message.channel.send("Bye o/")

  }if(message.content.startsWith("and u")) {
    message.channel.send("Yes u")

  }if(message.content.startsWith("GN")) {
    message.channel.send("Good Night :sleeping_accommodation:")

  }if(message.content.startsWith("gn")) {
    message.channel.send("Good Night :sleeping_accommodation:")

  }if(message.content.startsWith("Gn")) {
    message.channel.send("Good Night :sleeping_accommodation:")

  }if(message.content.startsWith("-GN")) {
    message.channel.send("Good Night :sleeping_accommodation:")

  }if(message.content.startsWith("-Gn")) {
    message.channel.send("Good Night :sleeping_accommodation:")

  }if(message.content.startsWith("-gn")) {
    message.channel.send("Good Night :sleeping_accommodation:")

  }if(message.content.startsWith("And u")) {
    message.channel.send("Yes u")

  }if(message.content.startsWith("no u")) {
    message.channel.send("And u")

  }if(message.content.startsWith("No u")) {
    message.channel.send("And u")

  }if(message.content.startsWith("F")) {
    message.channel.send("F")

  }if(message.content.startsWith("suwako smile")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/AUkhZyemRnS_e0n0WdpF-g.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("Suwako smile")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/AUkhZyemRnS_e0n0WdpF-g.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("Suwako Smile")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/AUkhZyemRnS_e0n0WdpF-g.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("SUWAKO SMILE")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/AUkhZyemRnS_e0n0WdpF-g.png`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("¿Quien es la más bugeada?")) {
    message.channel.send("Yo la soy, yo la soy *mueve la cola*, *se resbala y se parte el cuello con sus fluidos vaginales*")

  }if(message.content.startsWith(prefix + "kym")) {
    const embed = new Discord.RichEmbed()
    .setImage(`https://image.prntscr.com/image/0zuB3_oVT7aX3YotJm8pGA.jpg`)
    .setColor(embedc)
    message.channel.send({ embed });

  }if(message.content.startsWith("la kgo")) {
    message.channel.send("UHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")

  }if(message.content.startsWith("La kgo")) {
    message.channel.send("UHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
  
  }if(message.content.startsWith("yes u")) {
    message.channel.send("No u")

  }if(message.content.startsWith("Yes u")) {
    message.channel.send("No u")
  
  }if(message.content.startsWith("oesao")) {
    message.channel.send("No u, ｗｗｗ")

  }if(message.content.startsWith("Oesao")) {
    message.channel.send("No u, ｗｗｗ")

  }if(message.content.startsWith("OESAO")) {
    message.channel.send("No u, ｗｗｗ")

  }if(message.content.startsWith("because not")) {
    message.channel.send("....")

  }if(message.content.startsWith("Because not")) {
    message.channel.send("....")
    
  }if(message.content.startsWith("osu!")) {
    message.channel.send("osu!nitro")

  }if(message.content.startsWith("Gracias")) {
    message.channel.send("De nada onii-chan (´・◡・｀)")
  
  }if(message.content.startsWith("baka")) {
    message.channel.send("No lolis 4 u")

  }if(message.content.startsWith("Baka")) {
    message.channel.send("No lolis 4 u")

  }if(message.content.startsWith("Bones_irl2")) {
    message.channel.send("Las clases en")

  }if(message.content.startsWith("w w w")) {
    message.channel.send("ｗｗｗｗｗｗｗｗｗｗｗ")

  }if(message.content.startsWith(prefix + "roll")) {

let roll = message.content.split(' ').slice(1);
if(roll < 0) return message.reply(`Escribe un número entre 1 y 100!`);
if(roll > 100) return message.reply(`Escribe un número entre 1 y 100!`);
    
let randomroll  = Math.floor(Math.random() * roll) + 1;
let random = Math.floor(Math.random() * 100) + 1;
    
if(!roll[0]){
    message.channel.send(random)
    
}else{
    message.channel.send(randomroll)
    
}

  }if(message.content.startsWith(prefix + "botstats")) {
    /*

Mostrar las estadisticas e informacion de un bot
en un mensaje tipo RichEmbed()

requiere el package moment:
instalación: npm install moment,
             npm install moment-duration-format
*/


const moment = require("moment");
require('moment-duration-format');

const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
    
    
const embed = new Discord.RichEmbed()
.setColor(embedc)

.setAuthor(`Bot info`, client.user.avatarURL)
.addField(`Dueño`, `benjavaldez62#1184`, true)
.addField(`Version`, `1.0.0`, true)
.addField(`Libreria`, `Discord ^11.2.1 (Js)`, true)

.addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
.addField(`Uptime`, `${actividad}`, true)
.addField(`Servidores`, `${client.guilds.size.toLocaleString()}`, true)

.addField(`Usuarios`, `${client.users.size.toLocaleString()}`, true)
.addField(`Canales`, `${client.channels.size.toLocaleString()}`, true)
.addField(`Conexiones a voz`, `${client.voiceConnections.size}`, true)

message.channel.send(embed);

  }if(message.content.startsWith(prefix + "dg")) {
    message.channel.send("http://www.mediafire.com/file/bdi5ulb794burg1/DuckkkGamemadu.byVeroxPiViGames.rar/file")

  }if(message.content.startsWith(prefix + "help")) {
    message.react("✅")
    let cliente = client.user.username
    const embed = new Discord.RichEmbed()
    .setTitle("Comandos de " + cliente)
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor(embedc)
    .setDescription(`Prefijo "h!"`)
    .addField("Comandos de Capturas (requieren el prefijo):", "bucle, arrows, nepe, dimons, quiensoy, muntaste, buzz, pito, arabe, brazzers, mexicano, hart, felicidad, lame, kyt, snou, dg, asco, calma, calmense, frente, hielo, saludo, lewd, riko, llaba, marrano, getando, fc, globo, gie, fortnite, joto, tellme, beibi, hot, pedoz, ojear, wapa, ajax, perro, pato, rock, triggered, rick, kym." )
    .addField("Comandos de Respuesta (no necesitan el prefijo):", "PERO, 13, TabletLess, Duck Game, Hola hentai bot, Alejandro, Benia, Nitro, Risas, LLÁBA, Pito, Hola, Hello, *c lo cosha sin condon*, ._., Hmm, Abr la Pixula, huh?, Ons?, oniichan, Ban, Kyc, Why?, Why not?, Zorro, A ver, *c va volando*, Holy Shit! It's Airman!!. Los megas en, En, GG, *c va*, And u, GN, Oh Yes, Oh No, No u, F, Suwako Smile, ¿Quien es la más bugeada?, La kgo, Yes u, Oesao, Because not, osu!, Gracias, Baka, Bones_irl2, w w w.")
    .addField("Comandos Útiles :b (requieren el prefijo):", "roll, serverinfo, botstats, bab, say, ping, image, qimage, himage, avatar, ban, kick, purge.")
    .addField("Comandos de emojis (no necesitan el prefijo):", ":abrahamr:, :lilach:, :UpdateReady:, :pacman:, :xmas:, :pedro:, :benja:, :uwu:, :pedrov3:, :omegapacman_enojado:, :catgirl_patch_thumbsup:, :catgirl_patch_wave:, :volando:, :EosGasam:, :ahegao:, :rid:, :finger:, :AwooRainbow:, :tulatu:, :no_lo_se:, :read:, :santolo:, :quejue:, :pomelo:, :patch:, :coca_cola:, :Ohno:, :NitroThink:, :mdn:, :mcm:, :koishi:, :MadokaLewd:, :dedo_think:, :dedo_knife:, :dedo:, :4k:, :happy:, :ReallySee:, :Fierroswey:, :hielardo:, :grancisco:, :nouinfinite:")
    .setFooter(message.author.username, message.author.avatarURL)
    message.channel.send({ embed })

  }let asd = args.join(" ");
  if(message.content.startsWith(prefix + "embed")) {
    message.channel.bulkDelete(1);
    const embed = new Discord.RichEmbed()
    .setTitle(asd)
    .setColor(embedc)
    message.channel.send({ embed });
  
  }if(message.content.startsWith(prefix + "say")) {
  let texto = args.join(" ");
  message.channel.bulkDelete(1);
  console.log("Say: " + texto)

   message.channel.send(texto);
   if(!texto) return message.channel.send(`Di Algo Pendejo`);

  }if(message.content.startsWith(prefix + "ping")) {
  let ping = Math.floor(message.client.ping);
   message.channel.send(":ping_pong: Pong!, "+ ping + "ms");

  }let tag = args.join(" ")
  if(message.content.startsWith(prefix + "image")) {
    const Danbooru = require('danbooru')
  // Perform a search for popular image posts
  const booru = new Danbooru()
  booru.posts(1000)
  booru.posts({ tags:(tag) }).then(posts => {
  // Select a random post from posts array
  const index = Math.floor(Math.random(100) * posts(Math.random))
  const post = posts[index]
 
  // Get post's url and create a filename for it
  const url = booru.url(post.file_url)
 
  // Download post image using node's https and fs libraries
  require('https')
  const embed =new Discord.RichEmbed()
  .setImage(`${url}`)
  .setDescription(tag)
  .setColor(embedc)
  message.channel.send( embed )
  })

}if(message.content.startsWith(prefix + "image")) {
  const Danbooru = require('danbooru')
// Perform a search for popular image posts
const booru = new Danbooru()
booru.posts({ tags: 'rating:safe' }).then(posts => {
// Select a random post from posts array
const index = Math.floor(Math.random(1) * posts.length)
const post = posts[index]

// Get post's url and create a filename for it
const url = booru.url(post.file_url)

// Download post image using node's https and fs libraries
require('https')
const embed =new Discord.RichEmbed()
.setImage(`${url}`)
.setDescription("Rating Safe")
.setColor(embedc)
message.channel.send( embed )
})

}if(message.content.startsWith(prefix + "qimage")) {
  const Danbooru = require('danbooru')
// Perform a search for popular image posts
const booru = new Danbooru()
booru.posts({ tags: 'rating:questionable' }).then(posts => {
// Select a random post from posts array
const index = Math.floor(Math.random(1) * posts.length)
const post = posts[index]

// Get post's url and create a filename for it
const url = booru.url(post.file_url)

// Download post image using node's https and fs libraries
require('https')
const embed =new Discord.RichEmbed()
.setImage(`${url}`)
.setDescription("Rating Questionable")
.setColor(embedc)
message.channel.send( embed )
})

}if(message.content.startsWith(prefix + "himage")) {
  const Danbooru = require('danbooru')
// Perform a search for popular image posts
const booru = new Danbooru()
booru.posts({ tags: 'rating:explicit' }).then(posts => {
// Select a random post from posts array
const index = Math.floor(Math.random(1) * posts.length)
const post = posts[index]

// Get post's url and create a filename for it
const url = booru.url(post.file_url)

// Download post image using node's https and fs libraries
require('https')
const embed =new Discord.RichEmbed()
.setImage(`${url}`)
.setDescription("Rating Explicit")
.setColor(embedc)
message.channel.send( embed )
})

  }else
  if(message.content.startsWith(prefix + "avatar")) {
  let miembro = message.mentions.users.first()
   if (!miembro) {
    const embed = new Discord.RichEmbed()
        .setImage(`${message.author.avatarURL}`)
        .setColor(embedc)
        .setFooter(`Avatar de ${message.author.tag}`);
    message.channel.send({ embed });
  } else {
    const embed = new Discord.RichEmbed()
        .setImage(`${miembro.avatarURL}`)
        .setColor(embedc)
        .setFooter(`Avatar de ${miembro.tag}`);

    message.channel.send({ embed });
  }

  }else
  if(message.content.startsWith(prefix + "ban")) {
  let mencionado = message.mentions.users.first();
let razon = args.slice(1).join(' ');

if(!mencionado) return message.reply('No ha mencionando a ningún miembro.');
if(!razon) return message.channel.send('Escriba una razón del uso de ban.');

message.guild.member(mencionado).ban(razon);
message.channel.send(`:white_check_mark: **${mencionado.username}**, fue baneado por **${message.author.username}.**, razón: ${razon}.`);

}if(message.content.startsWith(prefix + "bab")) {
let mencionado = message.mentions.users.first();

if(!mencionado) return message.reply('No ha mencionando a ningún miembro.');

message.channel.send(`:white_check_mark: **${mencionado.username}**, fue babeado por **${message.author.username}.**`);

}if(message.content.startsWith(prefix + "kick")) {
let mencionado = message.mentions.users.first();
let razon = args.slice(1).join(' ');

if(!mencionado) return message.reply('No ha mencionando a ningún miembro.');
if(!razon) return message.channel.send('Escriba una razón del uso de kick.');

message.guild.member(mencionado).kick(razon);
message.channel.send(`El pana **${mencionado.username}** se portó mal por: "${razon}" y le tocó paseo.`);

  }if(message.content.startsWith(prefix + "purge")) {
    let cantidad = parseInt(args[0]);
      message.channel.bulkDelete(cantidad + 1);
  
      message.channel.send("Se borraron " + cantidad + " mensajes.")
      .then(m => {
        m.delete(5000);

});

  }if(message.content.startsWith(prefix + "serverinfo")) {
    /*

Muestra información de un servidor determinado
en un mensaje tipo embed.
*/

var server = message.guild;
  
const embed = new Discord.RichEmbed()
.setThumbnail(server.iconURL)
.setAuthor(server.name, server.iconURL)
.addField('ID', server.id, true)
.addField('Region', server.region, true)
.addField('Creado el', server.joinedAt.toDateString(), true)
.addField('Dueño del Servidor', server.owner.user.tag+' ('+server.owner.user.id +')', true)
.addField('Miembros', server.memberCount, true)
.addField('Roles', server.roles.size, true)
.setColor(0x66b3ff)
    
message.channel.send(embed);

  }if(message.content.startsWith(prefix + "join")) {
    let Canalvoz = message.member.voiceChannel;

if(!Canalvoz || Canalvoz.type !== 'voice') {
    message.channel.send('¡Necesitas unirte a un canal de voz primero!.');

} else if (message.guild.voiceConnection) {
    message.channel.send('Ya estoy conectado en un canal de voz.');

} else {
    message.channel.send('Conectando...').then(m => {
        Canalvoz.join().then(() => {
            m.edit('Conectado exitosamente.').catch(error => console.log(error));

        }).catch(error => console.log(error));

    }).catch(error => console.log(error));

};

  }else
  if(message.content.startsWith(prefix + "play")) {
    const ytdl = require('ytdl-core');

let Canalvoz = message.member.voiceChannel;

if(!Canalvoz) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
if(!args) return message.channel.send('Ingrese un enlace de youtube para poder reproducirlo.');

Canalvoz.join()
    .then(connection => {
        const url = ytdl(args.join(' '), { filter : 'audioonly' });
        const dispatcher = connection.playStream(url);

        message.delete();
        message.channel.send('Reproduciendo ahora: '+ args);
        
    }).catch(console.error);
  
  }else
  if(message.content.startsWith(prefix + "leave")) {
    let Canalvoz = message.member.voiceChannel;

if(!Canalvoz) {
    message.channel.send('No estas conectado a un canal de voz.');

} else {
    message.channel.send('Dejando el canal de voz.').then(() => {
        Canalvoz.leave();

    }).catch(error => console.log(error));
    

 
}

};
});


client.login(config.token);