function doBlushAction() {
    var rand = [
        'https://i.imgur.com/uEto7uU.png',
        'https://i.imgur.com/shJas0G.png',
        'https://i.imgur.com/nVe3Rcx.png',
        'https://i.imgur.com/f0Bth5t.png',
        'https://i.imgur.com/ExL0JYc.png',
        'https://i.imgur.com/jjtmh3y.png',
        'https://i.imgur.com/WvMSR99.png',
        'https://i.imgur.com/S213JED.png',
        'https://i.imgur.com/LkcFxel.png',

   
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}

const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, msg, args) => {

    let personTagged = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || 'no one';
    if(personTagged === 'no one') return msg.reply('you must mention someone');
    
    const blushembed = new Discord.MessageEmbed()
        .setColor('#6b8e23')
        .setTitle(`${msg.author.tag} blush ${personTagged.user.tag}`)
        .setImage(doBlushAction())
        .setTimestamp()
        .setFooter('©MICHAEL', msg.member.user.avatarURL())

      msg.channel.send(blushembed)
};

module.exports.help = {
  name: "blush"
};
