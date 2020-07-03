const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  if(!msg.member.permissions.has('BAN_MEMBERS')) return;
  let usertoban = args[1];
  if(!usertoban) return msg.reply('You must say who to ban!');
  let reasonbanned = args.slice(2).join(' ');
  msg.guild.members.ban(usertoban, reasonbanned);
  const banembed1 = new Discord.MessageEmbed()
   .setColor('#ff6969')
   .setTitle(`banned`)
   .setDescription(`<@${usertoban}> has been banned!`)
   .addField('banned', `<@${usertoban}> was banned for the following reason: ${reasonbanned}`, true)
   .setTimestamp()
   .setFooter('©MICHAEL', msg.member.user.avatarURL())

  msg.channel.send(banembed1);
};

module.exports.help = {
  name: "heckban"
}
