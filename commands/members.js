const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  const membercount = new Discord.MessageEmbed()
   .setColor('#fa4d57')
   .setTitle('Members')
   .setDescription(`The amount of users and bots in ${msg.guild.name}`)
   .setThumbnail()
   .setImage('https://i.imgur.com/pa8ziHA.gif', true)
   .addField('Total Members', msg.guild.members.cache.size)
   .addField('Users', msg.guild.members.cache.filter(member => !member.user.bot).size, true)
   .addField('Bots', msg.guild.members.cache.filter(member => member.user.bot).size, true)
   .setTimestamp()
   .setFooter(msg.member.user.tag, msg.member.user.avatarURL());

   msg.channel.send(membercount);
};

module.exports.help = {
  name: "members"
}
