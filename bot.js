const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
client.user.setGame(`الكمبيوتر شغال 24 ساعة .`,'https://www.twitch.tv/v5bz');
}); 
client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('أهلاً وسهلاً');
  }
client.on('message', msg => {
  if (msg.content === 'ارحب') {
    msg.reply('ارحب');
  }
});
client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('ولكم شرفتنا');
  }
});
client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام نورت');
  }
});
});
client.login(process.env.BOT_TOKEN);
