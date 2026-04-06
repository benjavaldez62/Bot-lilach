


if (message.content.startsWith(prefix + "roll")) {

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
