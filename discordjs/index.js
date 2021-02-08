const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('Connecté');
});

bot.on('message', function (msg) {
  const msg_sep = msg.content.split(' ');
  const premier_mot = msg_sep[0];
  switch (premier_mot) {
    case '!ping':
      msg.reply('Pong');
      break;
    case '!yin':
      msg.reply('Yang');
      break;
    case '!hey':
      msg.reply('Hello');
      break;
    case '!dire':
      msg.reply(msg_sep[1]);
      break;
    case '!test':
      if (msg.channel.id === '791424989370515457') {
        msg.reply('Testing only in Test-Bot');
      }
      break;
  }
});

bot.login('TOKEN');
