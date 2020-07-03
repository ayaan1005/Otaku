const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  if (!msg.member.hasPermission('MANAGE_MESSAGES', true, true) || !msg.member.user.id === '641338586922352649') return;
  msg.channel.bulkDelete(parseInt(args[1]) + 1);
};

module.exports.help = {
  name: "purge"
}
