const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {

}); 
client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('أهلاً وسهلاً');
  }
  }); 
client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('ولكم نورت');
  }
});
client.login(process.env.BOT_TOKEN);
 
