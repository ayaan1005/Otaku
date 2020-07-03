function doPatAction() {
    var rand = [
        'https://i.imgur.com/9WHXNRB.png',
        'https://i.imgur.com/rLxeVrD.png',
        'https://i.imgur.com/xaq9GBu.png', 
        'https://i.imgur.com/UQeKm3K.png',
        'https://i.imgur.com/FCjNVXe.png', 
        'https://i.imgur.com/ExiD57n.png', 
        'https://i.imgur.com/K6188yy.png', 
        'https://i.imgur.com/N3tfCdT.png', 
        'https://i.imgur.com/2Bzybfe.png', 
        'https://i.imgur.com/2JhgYbr.png',
        'https://i.imgur.com/UJ9NxQv.png', 
        'https://i.imgur.com/9WHXNRB.png', 
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}

const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, msg, args) => {

    let personTagged = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || 'no one';
    if(personTagged === 'no one') return msg.reply('you must mention someone to pat');
    
    const patembed1 = new Discord.MessageEmbed()
        .setColor('#e97fa5')
        .setTitle(`${msg.author.tag} :relieved: pats ${personTagged.user.tag}`)
        .setImage(doPatAction())
        .setTimestamp()
        .setFooter('| Submitted by Sandra | Authorized ©MICHAEL',msg.member.user.avatarURL())

      msg.channel.send(patembed1)
};

module.exports.help = {
  name: "pat"
};
