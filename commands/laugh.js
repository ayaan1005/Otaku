function doLaughAction() {
    var rand = [
        'https://i.imgur.com/vgU5XeO.png', 
        'https://i.imgur.com/DbFrVDw.png',
        'https://i.imgur.com/SYFtfzO.png', 
        'https://i.imgur.com/MeChgzT.png', 
        'https://i.imgur.com/I3Rewis.png', 
        'https://i.imgur.com/yIHsG2Z.png',
        'https://i.imgur.com/v0RGpUl.png',
        'https://i.imgur.com/wkKW8hY.png', 
        'https://i.imgur.com/e9hdNeI.png', 
        'https://i.imgur.com/oPmIJrX.gifel.png',

   
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}

const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, msg, args) => {

    let personTagged = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || 'no one';
    if(personTagged === 'no one') return msg.reply('you must mention someone');
    
    const laughembed = new Discord.MessageEmbed()
        .setColor('#ffefd5')
        .setTitle(`${msg.author.tag} :laughing: laughs at ${personTagged.user.tag}`)
        .setImage(doLaughAction())
        .setTimestamp()
        .setFooter('| Submitted by | ©MICHAEL', msg.member.user.avatarURL())

      msg.channel.send(laughembed)
};

module.exports.help = {
  name: "laugh"
};
