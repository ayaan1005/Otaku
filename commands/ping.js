const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  let pingo = new Date().getTime() - msg.createdTimestamp + " ms";

  const pingembed1 = new Discord.MessageEmbed()
   .setColor('#FF69B4')
   .setTitle(`**Ping pong 🏓**`)
   .setDescription('Ping Times')
   .addField('Send', pingo, true)
   .setTimestamp()
   .setFooter('©MICHAEL', msg.member.user.avatarURL()) 

  msg.channel.send(pingembed1);
  //msg.channel.send("Ping:").then(m => {
  // m.edit(`${Date.now() - then}ms | ${bot.ping}ms | ${pingo}`);
 //});
};

module.exports.help = {
  name: "ping"
}
