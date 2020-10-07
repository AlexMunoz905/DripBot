// Written by Alex Munoz on 10/5/2020

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const path = require('path');
const twitterURL = "https://twitter.com/jjjimbrown5565";
const redHEX = "#ff0000"

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "dnd",  // You can show online, idle... Do not disturb is dnd
        game: {
            name: "you",  // The message shown
            type: "LISTENING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
 });

client.on('message', async message => {
    if (message.content === `*twitter`) {
        //message.channel.send(`${Discord.GuildMember} ` + twitterURL);
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor(redHEX)
            .setTitle("DripTopia's Twitter")
            .setURL(twitterURL)
            .setAuthor('DripBot')
            .setThumbnail('https://i.redd.it/on03fuhf3cu11.jpg');

        message.channel.send(exampleEmbed);
    }
    
    if (message.content === `*join`) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
        }
    }

    if (message.content === `*play asian`) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('oldAsianGuy.opus');
        }
    }

    if (message.content === `*play ant`) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('terryAntColony.opus');
        }
    }

});

client.login(token);
