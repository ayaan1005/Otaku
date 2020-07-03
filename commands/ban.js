const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  if(!msg.member.permissions.has('BAN_MEMBERS')) return;
  let usertoban = msg.mentions.members.first() || msg.guild.members.cache.get(args[1]);
  if(!usertoban) return msg.reply('You must say who to ban!');
  if(usertoban.bannable == false) return msg.reply('I cannot ban this member!');
  let reasonbanned = args.slice(2).join(' ');
  usertoban.ban(reasonbanned);
  const banembed1 = new Discord.MessageEmbed()
   .setColor('#FF69B4')
   .setTitle(`banned`)
   .setDescription(`${usertoban.user.tag} has been banned!`)
   .addField('banned', `${usertoban.user.tag} was banned for the following reason: ${reasonbanned}`, true)
   .setImage('https://i.imgur.com/hRmDVBH.gif', true)
   .setTimestamp()
   .setFooter('Made by: MICHAEL', msg.member.user.avatarURL())
  

  msg.channel.send(banembed1);
};

module.exports.help = {
  name: "ban"
}
