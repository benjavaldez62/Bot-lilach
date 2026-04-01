require('dotenv').config();
const rptasMap = require('./src/responses');
const sRptasMap = require('./src/sensitive_responses');
const emotesMap = require('./src/emotes');
const commands = require('./src/commands');

const { Client, GatewayIntentBits, EmbedBuilder, ActivityType } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
    ]
});
const config = require("./config.json");

let prefix = config.prefix;

client.on("clientReady", () => {
    client.user.setPresence({
        activities: [{
            name: "osu! with kukitai and blacklight846",
            type: ActivityType.Streaming,
            url: "https://www.twitch.tv/kunori"
        }],
        status: "online"
    });

    console.log("Estoy listo!");
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    const contentLower = message.content.toLowerCase(); // Convertir a minúsculas para case-insensitive
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    // Respuestas
    // Llamar al mapa Case Sensitive o Case Insensitive dependiendo del caso
    if (sRptasMap.has(message.content)) {
        message.channel.send(sRptasMap.get(message.content))
    } else if (rptasMap.has(contentLower)) {
        message.channel.send(rptasMap.get(contentLower))

        //Emojis
    } if (emotesMap.has(contentLower)) {
        message.channel.bulkDelete(1);
        message.channel.send(emotesMap.get(contentLower))

        // Comandos

    } if (message.content.startsWith(prefix + "ping")) {
        let ping = Math.floor(message.client.ping);
        message.channel.send(":ping_pong: Pong!, " + ping + "ms");

    } if (message.content.startsWith(prefix + "hart")) {
        const embed = new EmbedBuilder()
            .setColor(embedc)
            .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/551692303321006115/geiii.png`)
        message.channel.send({ embeds: [embed] });

    } if (message.content.startsWith(prefix + "felicidad")) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554208409180962817/geeee.png`)
            .setColor(embedc)
        message.channel.send({ embeds: [embed] });

    } if (message.content.startsWith(prefix + "lame")) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554208584381104128/lcik.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "nepe")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/BRG4QCNjQt2g2VAro5Aeww.jpg`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "kyt")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/GFpaYBSfQiaF357bZWD_wQ.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "snou")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/BoERi9ofRv6hZW-vG_pRIQ.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "asco")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/IAADX7jXTSaGcndMjrdd9w.jpg`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "calma")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/K97G0TZzQme-uJGkAc4kBg.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "calmense")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/vhWNsQ5pSGWu2RjTidKzkQ.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "frente")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/7ry9FjDrRc_AYt3q6YZFWA.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "hielo")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/p0XFbN5yRc225jKpEqwhMw.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "saludo")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/aeBqb_GSSduK8PhTUP4LFg.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith("Tabletless")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/d1og5-1OSB2Oncpsgg65KQ.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith("tabletless")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/d1og5-1OSB2Oncpsgg65KQ.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith("TabletLess")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/d1og5-1OSB2Oncpsgg65KQ.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "lewd")) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/469424478489935872/532982242398699540/JPEG_20180609_183559.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "arrows")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/vnVtjC0_Ti6i_ysrk8kWlA.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "riko")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/nI_GcJd_QTGw-_59fqDGsA.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "llaba")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/ibN28fxXQ-etHkNEpzBzRA.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "marrano")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/PNjUXAnVSDaX64IMv7_ZAQ.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "getando")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/yaWccqW6R8q2uPIn0ptOTQ.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "fc")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/UBK1Oi28QNuFtkCk0vC4PQ.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "globo")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/8UlSOMGhQMev3EFtuzDpmw.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "dimons")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/m9UYk3peSs6V-clEKnDayw.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "quiensoy")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/0aRqUS81ShGMqN7Akfr4zA.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "muntaste")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/8gqkbnjHSjejKzXRjpvc2w.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "gie")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/gneiSoJhQnqQiQsyuTgj7w.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "fortnite")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/FEPwtlVLT2K3ame9uLtaRQ.gif`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "joto")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/Gws8GY9_QRSHwW-DXnuhnw.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "bucle")) {
        const embed = new EmbedBuilder()
            .setImage("https://image.prntscr.com/image/Mubal0h5TeGPbhZfGZ3-lQ.png")
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "tellme")) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554213464831164426/geeeeeeee.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "beibi")) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554213903249440768/geeeee.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "hot")) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554214519174332449/2019-01-22_2.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "pedoz")) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554215118943158298/mic.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "ojear")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/JS6sff7CTg65PT6dEFYOSQ.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "wapa")) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/439189859542892546/554215533910949888/000000001.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "ajax")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/I6KpcvnkS9WQDJ21S8QeFg.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "perro")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/_g0sHaB1RDWrFoV1oyuM9w.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "pato")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/ienXOKE-SHaG7wM0olzUcQ.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "rock")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/MHVg2DwYR4WaiMiQkIbifQ.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "triggered")) {
        const embed = new EmbedBuilder()
            .setImage(`https://media1.tenor.com/images/9543655e42222c2ba2eea8da45e328bc/tenor.gif?itemid=5943310`)
            .setColor(embedc)
        message.channel.send({ embed })

    } if (message.content.startsWith(prefix + "rick")) {
        const embed = new EmbedBuilder()
            .setImage(`https://media.discordapp.net/attachments/508525841400201224/551117608418803712/536633433728876565.gif`)
            .setColor(embedc)
        message.channel.send({ embed })

    } if (message.content.startsWith(prefix + "mexicano")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/TlyM1aP3QJ_BovBPdSzDsw.png`)
            .setColor(embedc)
        message.channel.send({ embed })

    } if (message.content.startsWith(prefix + "brazzers")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/d7xM3hrDSkKHMM_veQRVwg.png`)
            .setColor(embedc)
        message.channel.send({ embed })

    } if (message.content.startsWith(prefix + "arabe")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/r6u9QdY_QMGA2ll6jqNReQ.jpg`)
            .setColor(embedc)
        message.channel.send({ embed })

    } if (message.content.startsWith(prefix + "pito")) {
        const embed = new EmbedBuilder()
            .setImage("https://image.prntscr.com/image/emUttkPCRfGpwqzTJulvRQ.jpg")
            .setColor(embedc)
        message.channel.send({ embed })

    } if (message.content.startsWith(prefix + "buzz")) {
        const embed = new EmbedBuilder()
            .setImage("https://image.prntscr.com/image/ubx0AW4gS1urZrWreWj8ZQ.jpg")
            .setColor(embedc)
        message.channel.send({ embed })

    } if (message.content.startsWith("a ver")) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/469424478489935872/531698831461711873/5d21f1d9-a37e-44a1-8f46-abd7f70a6177.png`)
            .setColor(embedc)
        message.channel.send({ embed });


    } if (message.content.startsWith("avr")) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/469424478489935872/531698831461711873/5d21f1d9-a37e-44a1-8f46-abd7f70a6177.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith("abr")) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/469424478489935872/531698831461711873/5d21f1d9-a37e-44a1-8f46-abd7f70a6177.png`)
            .setColor(embedc)
        message.channel.send({ embed });


    } if (message.content.startsWith("*c va volando*")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/wAOh5MMSTiOivXw6HrEzgg.jpeg`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith("oh yes")) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/475328011936464917/532964856182079528/image0.jpg`)
            .setColor(embedc)
        message.channel.send({ embed });



    } if (message.content.startsWith("OH NO")) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/475328011936464917/532400678375522304/unknown.png`)
            .setColor(embedc)
        message.channel.send({ embed });



    } if (message.content.startsWith("suwako smile")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/AUkhZyemRnS_e0n0WdpF-g.png`)
            .setColor(embedc)
        message.channel.send({ embed });

    } if (message.content.startsWith(prefix + "kym")) {
        const embed = new EmbedBuilder()
            .setImage(`https://image.prntscr.com/image/0zuB3_oVT7aX3YotJm8pGA.jpg`)
            .setColor(embedc)
        message.channel.send({ embed });


    } if (message.content.startsWith(prefix + "roll")) {

        let roll = message.content.split(' ').slice(1);
        if (roll < 0) return message.reply(`Escribe un número entre 1 y 100!`);
        if (roll > 100) return message.reply(`Escribe un número entre 1 y 100!`);

        let randomroll = Math.floor(Math.random() * roll) + 1;
        let random = Math.floor(Math.random() * 100) + 1;

        if (!roll[0]) {
            message.channel.send(random)

        } else {
            message.channel.send(randomroll)

        }

    } if (message.content.startsWith(prefix + "botstats")) {

        const embed = new EmbedBuilder()
            .setColor(embedc)

            .setAuthor({ name: `Bot info`, iconURL: client.user.avatarURL })
            .addFields({ name: `Dueño`, value: `benjavaldez62#1184`, inline: true })
            .addFields({ name: `Version`, value: `1.0.0`, inline: true })
            .addFields({ name: `Libreria`, value: `Discord ^14.26.0 (Js)`, inline: true })

            .addFields({ name: `Memoria`, value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, inline: true })
            .addFields({ name: `Uptime`, value: `${Math.floor(client.uptime / 1000 / 60 / 60)} hrs`, inline: true })
            .addFields({ name: `Servidores`, value: `${client.guilds.cache.size.toLocaleString()}`, inline: true })

            .addFields({ name: `Usuarios`, value: `${client.users.cache.size.toLocaleString()}`, inline: true })
            .addFields({ name: `Canales`, value: `${client.channels.cache.size.toLocaleString()}`, inline: true })
            .addFields({ name: `Conexiones a voz`, value: `0`, inline: true })

        message.channel.send({ embeds: [embed] });

    } if (message.content.startsWith(prefix + "dg")) {
        message.channel.send("http://www.mediafire.com/file/bdi5ulb794burg1/DuckkkGamemadu.byVeroxPiViGames.rar/file")

    } if (message.content.startsWith(prefix + "off")) {
        message.channel.send("`Desconectado..`").then(() => {
            client.destroy().then(() => {
                process.exit();
            });
        });

    } if (message.content.startsWith(prefix + "help")) {
        message.react("✅")
        let cliente = client.user.username
        const embed = new EmbedBuilder()
            .setTitle("Comandos de " + cliente)
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setColor(embedc)
            .setDescription(`Prefijo "h!"`)
            .addFields({ name: "Comandos de Capturas (requieren el prefijo):", value: "bucle, inline: arrows, nepe, dimons, quiensoy, muntaste, buzz, pito, arabe, brazzers, mexicano, hart, felicidad, lame, kyt, snou, dg, asco, calma, calmense, frente, hielo, saludo, lewd, riko, llaba, marrano, getando, fc, globo, gie, fortnite, joto, tellme, beibi, hot, pedoz, ojear, wapa, ajax, perro, pato, rock, triggered, rick, kym." })
            .addFields({ name: "Comandos de Respuesta (no necesitan el prefijo):", value: "PERO, inline: 13, TabletLess, Duck Game, Hola hentai bot, Alejandro, Benia, Nitro, Risas, LLÁBA, Pito, Hola, Hello, *c lo cosha sin condon*, ._., Hmm, Abr la Pixula, huh?, Ons?, oniichan, Ban, Kyc, Why?, Why not?, Zorro, A ver, *c va volando*, Holy Shit! It's Airman!!. Los megas en, En, GG, *c va*, And u, GN, Oh Yes, Oh No, No u, F, Suwako Smile, ¿Quien es la más bugeada?, La kgo, Yes u, Oesao, Because not, osu!, Gracias, Baka, Bones_irl2, w w w." })
            .addFields({ name: "Comandos Útiles :b (requieren el prefijo):", value: "roll, inline: serverinfo, botstats, bab, say, ping, image, qimage, himage, avatar, ban, kick, purge." })
            .addFields({ name: "Comandos de emojis (no necesitan el prefijo):", value: ":abrahamr:, inline: :lilach:, :UpdateReady:, :pacman:, :xmas:, :pedro:, :benja:, :uwu:, :pedrov3:, :omegapacman_enojado:, :catgirl_patch_thumbsup:, :catgirl_patch_wave:, :volando:, :EosGasam:, :ahegao:, :rid:, :finger:, :AwooRainbow:, :tulatu:, :no_lo_se:, :read:, :santolo:, :quejue:, :pomelo:, :patch:, :coca_cola:, :Ohno:, :NitroThink:, :mdn:, :mcm:, :koishi:, :MadokaLewd:, :dedo_think:, :dedo_knife:, :dedo:, :4k:, :happy:, :ReallySee:, :Fierroswey:, :hielardo:, :grancisco:, :nouinfinite:" })
            .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() })
        message.channel.send({ embeds: [embed] })

    } let asd = args.join(" ");
    if (message.content.startsWith(prefix + "embed")) {
        message.channel.bulkDelete(1);
        const embed = new EmbedBuilder()
            .setTitle(asd)
            .setColor(embedc)
        message.channel.send({ embeds: [embed] });

    } if (message.content.startsWith(prefix + "say")) {
        let texto = args.join(" ");
        message.channel.bulkDelete(1);
        console.log("Say: " + texto)

        message.channel.send(texto);
        if (!texto) return message.channel.send(`Di Algo Pendejo`);



    } let tag = args.join(" ")
    if (message.content.startsWith(prefix + "image")) {
        const Danbooru = require('danbooru')
        // Perform a search for popular image posts
        const booru = new Danbooru()
        booru.posts(1000)
        booru.posts({ tags: (tag) }).then(posts => {
            // Select a random post from posts array
            const index = Math.floor(Math.random() * posts.length)
            const post = posts[index]

            // Get post's url and create a filename for it
            const url = booru.url(post.file_url)

            // Download post image using node's https and fs libraries
            require('https')
            const embed = new EmbedBuilder()
                .setImage(`${url}`)
                .setDescription(tag)
                .setColor(embedc)
            message.channel.send({ embeds: [embed] })
        })

    } if (message.content.startsWith(prefix + "image")) {
        const Danbooru = require('danbooru')
        // Perform a search for popular image posts
        const booru = new Danbooru()
        booru.posts({ tags: 'rating:safe' }).then(posts => {
            // Select a random post from posts array
            const index = Math.floor(Math.random() * posts.length)
            const post = posts[index]

            // Get post's url and create a filename for it
            const url = booru.url(post.file_url)

            // Download post image using node's https and fs libraries
            require('https')
            const embed = new EmbedBuilder()
                .setImage(`${url}`)
                .setDescription("Rating Safe")
                .setColor(embedc)
            message.channel.send({ embeds: [embed] })
        })

    } if (message.content.startsWith(prefix + "qimage")) {
        const Danbooru = require('danbooru')
        // Perform a search for popular image posts
        const booru = new Danbooru()
        booru.posts({ tags: 'rating:questionable' }).then(posts => {
            // Select a random post from posts array
            const index = Math.floor(Math.random() * posts.length)
            const post = posts[index]

            // Get post's url and create a filename for it
            const url = booru.url(post.file_url)

            // Download post image using node's https and fs libraries
            require('https')
            const embed = new EmbedBuilder()
                .setImage(`${url}`)
                .setDescription("Rating Questionable")
                .setColor(embedc)
            message.channel.send({ embeds: [embed] })
        })

    } if (message.content.startsWith(prefix + "himage")) {
        const Danbooru = require('danbooru')
        // Perform a search for popular image posts
        const booru = new Danbooru()
        booru.posts({ tags: 'rating:explicit' }).then(posts => {
            // Select a random post from posts array
            const index = Math.floor(Math.random() * posts.length)
            const post = posts[index]

            // Get post's url and create a filename for it
            const url = booru.url(post.file_url)

            // Download post image using node's https and fs libraries
            require('https')
            const embed = new EmbedBuilder()
                .setImage(`${url}`)
                .setDescription("Rating Explicit")
                .setColor(embedc)
            message.channel.send({ embeds: [embed] })
        })

    }
    if (message.content.startsWith(prefix + "avatar")) {
        let miembro = message.mentions.users.first()
        if (!miembro) {
            const embed = new EmbedBuilder()
                .setImage(message.author.displayAvatarURL())
                .setColor(embedc)
                .setFooter({ text: `Avatar de ${message.author.tag}` });
            message.channel.send({ embeds: [embed] });
        } else {
            const embed = new EmbedBuilder()
                .setImage(miembro.displayAvatarURL())
                .setColor(embedc)
                .setFooter({ text: `Avatar de ${miembro.tag}` });

            message.channel.send({ embeds: [embed] });
        }

    }
    if (message.content.startsWith(prefix + "ban")) {
        let mencionado = message.mentions.users.first();
        let razon = args.slice(1).join(' ');

        if (!mencionado) return message.reply('No ha mencionando a ningún miembro.');
        if (!razon) return message.channel.send('Escriba una razón del uso de ban.');

        message.guild.member(mencionado).ban(razon);
        message.channel.send(`:white_check_mark: **${mencionado.username}**, fue baneado por **${message.author.username}.**, razón: ${razon}.`);

    } if (message.content.startsWith(prefix + "bab")) {
        let mencionado = message.mentions.users.first();

        if (!mencionado) return message.reply('No ha mencionando a ningún miembro.');

        message.channel.send(`:white_check_mark: **${mencionado.username}**, fue babeado por **${message.author.username}.**`);

    } if (message.content.startsWith(prefix + "kick")) {
        let mencionado = message.mentions.users.first();
        let razon = args.slice(1).join(' ');

        if (!mencionado) return message.reply('No ha mencionando a ningún miembro.');
        if (!razon) return message.channel.send('Escriba una razón del uso de kick.');

        message.guild.member(mencionado).kick(razon);
        message.channel.send(`El pana **${mencionado.username}** se portó mal por: "${razon}" y le tocó paseo.`);

    } if (message.content.startsWith(prefix + "purge")) {
        let cantidad = parseInt(args[0]);
        message.channel.bulkDelete(cantidad + 1);

        message.channel.send("Se borraron " + cantidad + " mensajes.")
            .then(m => {
                m.delete(5000);

            });

    } if (message.content.startsWith(prefix + "serverinfo")) {


        var server = message.guild;

        const embed = new EmbedBuilder()
            .setThumbnail(server.iconURL)
            .setAuthor({ name: server.name, iconURL: server.iconURL })
            .addFields({ name: 'ID', value: server.id, inline: true })
            .addFields({ name: 'Locale', value: server.preferredLocale, inline: true })
            .addFields({ name: 'Creado el', value: server.createdAt.toDateString(), inline: true })
            .addFields({ name: 'Dueño del Servidor', value: server.ownerId, inline: true })
            .addFields({ name: 'Miembros', value: server.memberCount, inline: true })
            .addFields({ name: 'Roles', value: server.roles.cache.size, inline: true })
            .setColor(0x66b3ff)

        message.channel.send({ embeds: [embed] });

    };
});


client.login(process.env.TOKEN);
