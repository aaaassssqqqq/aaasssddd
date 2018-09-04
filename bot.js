const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
client.user.setGame(` مصمم بوتات .`,'https://www.twitch.tv/v5bz');
}); 
client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('أهلاً وسهلاً');
  }
});
client.login(process.env.BOT_TOKEN);
 
