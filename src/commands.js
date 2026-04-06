const { EmbedBuilder } = require("discord.js");
const config = require("../config.json");
const pImagesMap = require("./data/prefix_images");
const rptasMap = require('./data/responses');
const sRptasMap = require('./data/sensitive_responses');
const emotesMap = require('./data/emotes');
const linksMap = require('./data/links');

// Color base para tus embeds (puedes sacarlo de config.json si prefieres)
const embedc = config.embed_color;

const commands = {

    // Comandos de Utilidad
    'ping': (message) => {
        let ping = Math.floor(message.client.ws.ping);
        message.channel.send(`:ping_pong: Pong!, ${ping}ms.`);
    },

    'help': (message) => {        
        const manualCmds = Object.keys(commands)
            .filter(name => !pImagesMap.has(name) && !linksMap.has(name)) // Excluir comandos de imágenes y links
            .map(name => `\`${name}\``)
            .join(', ');

        const imageCmds = Array.from(pImagesMap.keys())
            .map(name => `\`${name}\``)
            .join(', ');
        
        const linkCmds = Array.from(linksMap.keys())
            .map(name => `\`${name}\``)
            .join(', ');

        const embed = new EmbedBuilder()
            .setTitle("Manual de Comandos")
            .setDescription(`Prefix: \`${config.prefix}\``)
            .setColor(embedc)
            .addFields(
                { name: "Comandos Generales", value: manualCmds || "No hay comandos disponibles." },
                { name: "Comandos de Imágenes", value: imageCmds || "No hay comandos de imágenes disponibles." },
                { name: "Links", value: linkCmds || "No hay comandos de links disponibles." }
            )
            .setFooter({ text: `Consultado por ${message.author.username}`, iconURL: message.author.displayAvatarURL() })
            .setTimestamp();
            
        message.channel.send({ embeds: [embed] });

    },

    'emotes': (message) => {
        const emotesList = Array.from(emotesMap.keys())
            .map(name => `\`${name}\``)
            .join(', ');
        const embed = new EmbedBuilder()
            .setTitle("Emotes Disponibles")
            .setColor(embedc)
            .setFields(
                { name: "Emotes", value: emotesList || "No hay emotes disponibles." }
            )
            .setFooter({ text: `Consultado por ${message.author.username}`, iconURL: message.author.displayAvatarURL() })
            .setTimestamp();

        message.channel.send({ embeds: [embed] });

    },

    'respuestas': (message) => {
        const listaNormal = Array.from(rptasMap.keys())
            .map(name => `\`${name}\``)
            .join(', ');
        
        const listaSensitive = Array.from(sRptasMap.keys())
            .map(name => `\`${name}\``)
            .join(', ');
        const embed = new EmbedBuilder()
            .setTitle("Respuestas Automaticas")
            .setDescription("El bot responderá automáticamente si detecta estas palabras:")
            .setColor(embedc)
            .addFields(
                { name: "Respuestas Normales (minuscula o mayuscula)", value: listaNormal || "No hay respuestas disponibles." },
                { name: "Respuestas Sensibles (deben coincidir exactamente)", value: listaSensitive || "No hay respuestas sensibles disponibles." }
            )
            .setFooter({ text: `Consultado por ${message.author.username}`, iconURL: message.author.displayAvatarURL() })
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    },

    'avatar': (message, args) => {
        const target = message.mentions.users.first() || message.author;

        const embed = new EmbedBuilder()
            .setTitle(`Avatar de ${target.username}`)
            .setColor(embedc)
            .setImage(target.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setFooter({ text: `Pedido por ${message.author.username}`, iconURL: message.author.displayAvatarURL() })
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    },

    'server': (message) => {
        const { guild } = message;

        const creado = Math.floor(guild.createdTimestamp / 1000);

        const embed = new EmbedBuilder()
            .setTitle(`Información del Servidor: ${guild.name}`)
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .setColor(embedc)
            .addFields(
                { name: "ID del Servidor", value: `\`${guild.id}\``, inline: true },
                { name: "Dueño", value: `<@${guild.ownerId}>`, inline: true },
                { name: "Miembros", value: `\`${guild.memberCount}\``, inline: true },
                { name: "Canales", value: `\`${guild.channels.cache.size}\``, inline: true },
                { name: "Roles", value: `\`${guild.roles.cache.size}\``, inline: true },
                { name: "Creado el", value: `<t:${creado}:F>`, inline: false }
            )
            .setFooter({ text: `Pedido por ${message.author.username}`, iconURL: message.author.displayAvatarURL() })
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    },

    // Tablero de comandos para boorus (danbooru, konachan, yandere, safebooru)
    'danbooru': (message, args) => 
        fetchBooru(message, args, 'https://danbooru.donmai.us/posts.json'),

    'konachan': (message, args) => 
        fetchBooru(message, args, 'https://konachan.com/post.json'),

    'yandere': (message, args) => 
        fetchBooru(message, args, 'https://yande.re/post.json'),
    
    'gelbooru': async (message, args) => {
        const axios = require('axios');
        const tags = args.join(' ');
        if (!tags) return message.reply("Poné los tags (ej: `h!gelbooru hatzune_miku`).");

        try {
            const { data } = await axios.get('https://gelbooru.com/index.php', {
                params: {
                    page: 'dapi',
                    s: 'post',
                    q: 'index',
                    json: 1,
                    limit: 1,
                    tags: `sort:random ${tags}`,
                    api_key: process.env.G_KEY,
                    user_id: process.env.G_USER
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
                }
            });

            if (!data.post || data.post.length === 0) {
                return message.reply("No encontré nada en Gelbooru.");
            }

            const post = data.post[0];
            
            // --- RECONSTRUCCIÓN DE URL ---
            // Si la URL no trae "https:", se la pegamos. Si viene vacía, usamos el sample.
            let rawURL = post.file_url || post.sample_url || post.preview_url;
            
            if (rawURL.startsWith('//')) {
                rawURL = `https:${rawURL}`;
            } else if (!rawURL.startsWith('http')) {
                // Usamos el dominio que nos dio tu consola (img2) o el genérico
                rawURL = `https://img2.gelbooru.com/images/${post.directory}/${post.image}`;
            }

            // TRUCO MAESTRO: Agregamos un timestamp para que Discord no la bloquee por caché
            // Esto hace que la URL sea: ...image.jpg?v=123456789
            const finalImageURL = `${rawURL}?v=${Date.now()}`;
            
            // --- DEPURACIÓN (Solo para vos en la consola) ---
            console.log(`URL Generada: ${rawURL}`);

            const embed = new EmbedBuilder()
                .setTitle(`Gelbooru: ${tags}`)
                .setURL(`https://gelbooru.com/index.php?page=post&s=view&id=${post.id}`)
                .setImage(finalImageURL) // <--- Aquí va la URL reconstruida con timestamp
                .setColor(embedc)
                .setFooter({ text: `ID: ${post.id} | Rating: ${post.rating?.toUpperCase() || 'N/A'}` })
                .setTimestamp();

            // Enviamos el embed y, si falla la imagen, mandamos el link directo abajo (opcional)
            message.channel.send({ embeds: [embed] });

        } catch (error) {
            console.error("Error en Gelbooru:", error.message);
            message.reply("Error al conectar con Gelbooru.");
        }
    },



}

// Plantillas de embeds para comandos con imagenes (prefix)
pImagesMap.forEach((url, name) => {
    commands[name] = (message) => {
        const embed = new EmbedBuilder()
            .setColor(embedc)
            .setImage(url);
        message.channel.send({ embeds: [embed] });
    };
});

// Generador automático de links simples
linksMap.forEach((url, name) => {
    commands[name] = (message) => {
        message.channel.send(`🔗 **${name.toUpperCase()}:** ${url}`);
    };
});


// --- FUNCIÓN GENÉRICA PARA BOORUS ---
// Esta función interna te ahorra escribir 50 veces lo mismo

const fetchBooru = async (message, args, baseUrl) => {
    const axios = require('axios');
    const tags = args.join(' ');
    if (!tags) return message.reply("Faltan los tags (ej: `h!konachan vocaloid`).");

    // Construimos la URL (la mayoría usa /post.json o /posts.json)
    const url = `${baseUrl}?tags=${encodeURIComponent(tags)}&limit=1&random=true`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (!data || data.length === 0) return message.reply("No encontré nada.");

        const post = data[0];
        // En Konachan/Yande.re a veces el campo es 'file_url' directamente
        const imageURL = post.file_url || post.large_file_url || post.sample_url;

        const embed = new EmbedBuilder()
            .setTitle(`Resultado de ${new URL(baseUrl).hostname}`)
            .setImage(imageURL)
            .setColor(embedc)
            .setFooter({ text: `Tags: ${tags}` });

        message.channel.send({ embeds: [embed] });
    } catch (e) {
        message.reply("Error al conectar con la API.");
    }
};

module.exports = commands;