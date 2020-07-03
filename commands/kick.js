const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  if(!msg.member.permissions.has('KICK_MEMBERS')) return;
  let usertokick = msg.mentions.members.first() || msg.guild.members.cache.get(args[1]);
  if(!usertokick) return msg.reply('You must say who to kick!');
  if(usertokick.kickable == false) return msg.reply('I cannot kick this member!');
  let reasonkicked = args.slice(2).join(' ');
  usertokick.kick(reasonkicked);
  const kickembed1 = new Discord.MessageEmbed()
   .setColor('#000000')
   .setTitle(`Kicked`)
   .setDescription(`${usertokick.user.tag} has been kicked!`)
   .addField('Kicked', `${usertokick.user.tag} was kicked for the following reason: ${reasonkicked}`, true)
   .setTimestamp()
   .setFooter(msg.member.user.tag, msg.member.user.avatarURL())

  msg.channel.send(kickembed1);
};

module.exports.help = {
  name: "kick"
}
