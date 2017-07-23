import * as Discord from 'discord.js';
const auth = require('../auth.json');

export class DiscordBot extends Discord.Client {
    constructor() {
        super();
        
        this.login(auth.token);
        this.registerEvents();
    }

    registerEvents(): void {
        this.on('ready', () => {
            console.log('Client is ready');
        });
        
        this.on('message', (message: any) => {
            console.log(message.content);
            if (message.content === 'moro') {
                message.reply('moro');
            }
        });
    }
}
