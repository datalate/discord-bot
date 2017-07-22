const Discord = require('discord.js');
const client = new Discord.Client();

const auth = require('../auth.json');

client.on('ready', () => {
    console.log('Client is ready');
});

client.on('message', (message: any) => {
    console.log(message.content);
    if (message.content === 'moro') {
        message.reply('moro');
    }
});

client.login(auth.token);
