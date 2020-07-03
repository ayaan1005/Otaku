function doSlapAction() {
    var rand = [
        'https://i.imgur.com/hK79q77.gif',
        'https://i.imgur.com/Tnf5ako.gif',
        'https://i.imgur.com/Ph5hj1d.gif',
        'https://i.imgur.com/3CUw9Cq.png',
        'https://i.imgur.com/zmZh5Ep.gif',
        'https://i.imgur.com/MwZJCSg.png',
        'https://i.imgur.com/zmZh5Ep.gif',
        'https://i.imgur.com/JayJXFa.png',
        'https://i.imgur.com/jOq6qxf.png',
        'https://i.imgur.com/o0r1bnJ.png',
        'https://i.imgur.com/Dkh3rs6.png',
        'https://i.imgur.com/Fc8RgOb.png',
        'https://i.imgur.com/elHUehv.png',
        'https://i.imgur.com/YRWAx7u.png',
        'https://i.imgur.com/k5wOExf.png',
        'https://i.imgur.com/Oc4IPRM.png',
        'https://i.imgur.com/gulZITh.png',

   
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}

const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, msg, args) => {

    let personTagged = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || 'no one';
    if(personTagged === 'no one') return msg.reply('you must mention someone to slap');
    
    const slapembed = new Discord.MessageEmbed()
        .setColor('#ffc60a')
        .setTitle(`${msg.author.tag} slaps ${personTagged.user.tag}`)
        .setImage(doSlapAction())
        .setTimestamp()
        .setFooter('| Submitted by Lady |©MICHAEL', msg.member.user.avatarURL())

      msg.channel.send(slapembed)
};

module.exports.help = {
  name: "slap"
};
