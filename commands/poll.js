const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  msg.channel.send(args.slice(1).join(" "))
  .then(m => {
    m.react('👍').then(msg => {
      m.react('👎');
    });
  });
};

module.exports.help = {
  name: "poll"
}
