function doHideAction() {
    var rand = [
        'https://i.imgur.com/mbLH5VV.png',
        'https://i.imgur.com/iGycmEL.png',
        'https://i.imgur.com/dCoNaAJ.png', 
        'https://i.imgur.com/OuFVbDQ.png',
        'https://i.imgur.com/iipTW0p.png',
        'https://i.imgur.com/UO0s81m.png',
        'https://i.imgur.com/d696NaQ.png',
        'https://i.imgur.com/s9cxcqF.png',
        'https://i.imgur.com/cSDz00n.png', 
        'https://i.imgur.com/UFB1twS.png', 
        'https://i.imgur.com/m3OLkZG.png',

   
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}

const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, msg, args) => {

    let personTagged = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || 'no one';
    if(personTagged === 'no one') return msg.reply('you must mention someone');
    
    const hideembed = new Discord.MessageEmbed()
        .setColor('#e2befb')
        .setTitle(`${msg.author.tag} :no_mouth: hides from ${personTagged.user.tag}`)
        .setImage(doHideAction())
        .setTimestamp()
        .setFooter('| Submitted by | who is who?', msg.member.user.avatarURL())

      msg.channel.send(hideembed)
};

module.exports.help = {
  name: "hide"
};
