const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل 

                               [ https://discord.gg/JjEc4Tb ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
 if (message.content === "!help") {
   message.react("😜")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("『Bot 1 | Arab Community』 『اسم البوت』", true)
      
      .addField("『مصمم البوت iTzAnan_Over#3412』", true)
      
      .addField("『!help^』😘『اذا تبي جميع الاوامر مع اوامر اضافية』😵", true)
      
	    .addField("『!help^^』👻『اذا تبي الاوامر العامة』😳", true)
	    
      .addField("『!help^^^』😮『اذا تبي  الاوامر الادارية』🤒", true)
      
      .addField("『🤑』『قريبا سوف نضيف المزيد و المزيد من الاوامر 』『😉』", true)
      
  message.channel.sendMessage({embed});

 }
});

});
client.login(process.env.BOT_TOKEN)
