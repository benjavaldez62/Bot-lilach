require('dotenv').config();
const rptasMap = require('./src/data/responses');
const sRptasMap = require('./src/data/sensitive_responses');
const emotesMap = require('./src/data/emotes');

const commands = require('./src/commands');
const imagesMap = require('./src/data/images');

const config = require("./config.json");

const embedc = config.embed_color;

const { Client, GatewayIntentBits, EmbedBuilder, ActivityType } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
    ]
});

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

    // Respuestas
    // Llamar al mapa Case Sensitive
    if (sRptasMap.has(message.content)) {
        return message.channel.send(sRptasMap.get(message.content))
    } 
    // Case Insensitive
    if (rptasMap.has(contentLower)) {
        return message.channel.send(rptasMap.get(contentLower))
    } 

    //Emojis
    if (emotesMap.has(contentLower)) {
        message.delete().catch(() => {});
        message.channel.send(emotesMap.get(contentLower))
    }

    // Respuestas con Imagenes SIN prefix
    if (imagesMap.has(contentLower)) {
        const embed = new EmbedBuilder()
        .setImage(imagesMap.get(contentLower))
        .setColor(embedc)
        return message.channel.send({ embeds:[embed] });
    } 

    // Ejecutar comandos del commands.js
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandName = args.shift().toLowerCase();

        //Buscar si el comando existe
        if (commands[commandName]) {
            try {
                commands[commandName](message, args)
            } catch (error) {
                console.error(error);
                message.reply("Hubo un error al ejecutar ese comando.");
            }
        }
    }

    

});


client.login(process.env.TOKEN);
