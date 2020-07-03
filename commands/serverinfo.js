const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  const server = new Discord.MessageEmbed()
  .setColor('#ffb6c1')
  .setTitle(`Info for ${msg.guild.name}`)
  .setDescription('Here is the info')
  .setThumbnail()
  .setImage(msg.guild.iconURL)
  .setImage('https://i.imgur.com/UcUDdsC.gif', true)
  .addField('Created At', msg.guild.createdAt, true)
  .addField('Owner', msg.guild.owner, true)
  .addField('Region', msg.guild.region, true)
  .addField('Members', msg.guild.members.cache.size, true)
  .addField('Role Count', msg.guild.roles.cache.size, true)
  .addField('Channel Count', msg.guild.channels.cache.size, true)
  .setTimestamp()
  .setFooter(msg.member.user.tag, msg.member.user.avatarURL());

  msg.channel.send(server);
};

module.exports.help = {
  name: "serverinfo"
}
