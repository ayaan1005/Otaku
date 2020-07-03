const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  let person = msg.mentions.members.first();
  if (!person) {
    person = msg.member
  }

  const pingembed1 = new Discord.MessageEmbed()
   .setColor('#000000')
   .setTitle(`Avatar`)
   .setDescription(`Avatar for ${person.user.tag}`)
   .setImage(person.user.avatarURL())
   .setTimestamp()
   .setFooter(msg.member.user.tag, msg.member.user.avatarURL())

  msg.channel.send(pingembed1);
  //msg.channel.send("Ping:").then(m => {
  // m.edit(`${Date.now() - then}ms | ${bot.ping}ms | ${pingo}`);
 //});
};

module.exports.help = {
  name: "av"
}
