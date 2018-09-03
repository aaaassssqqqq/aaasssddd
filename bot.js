const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`الكمبيوتر شغال 24 ساعة .`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.login(process.env.BOT_TOKEN);
