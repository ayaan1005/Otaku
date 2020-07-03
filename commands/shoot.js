function doShootAction() {
    var rand = [
        'https://i.imgur.com/J17piVQ.png',
        'https://i.imgur.com/d3s4IbW.png', 
        'https://i.imgur.com/aJyPBAv.png', 
        'https://i.imgur.com/cQTNaoI.png',
        'https://i.imgur.com/fPGROKJ.png', 
        'https://i.imgur.com/P3WENSP.png', 
        'https://i.imgur.com/lf0tdRO.png', 
        'https://i.imgur.com/KySAEcq.png',
        'https://i.imgur.com/p3NkscH.png', 
        'https://i.imgur.com/DS6ivfN.png', 
        'https://i.imgur.com/gltzb2R.png', 
        'https://i.imgur.com/9588otz.png',

   
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}

const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, msg, args) => {

    let personTagged = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || 'no one';
    if(personTagged === 'no one') return msg.reply('you must mention someone to shoot :gun:');
    
    const shootembed = new Discord.MessageEmbed()
        .setColor('#eb002a')
        .setTitle(`${msg.author.tag} :gun: shoots ${personTagged.user.tag}`)
        .setImage(doShootAction())
        .setTimestamp()
        .setFooter('|Submitted by Pumpky | Supervisor ©MICHAEL', msg.member.user.avatarURL())

      msg.channel.send(shootembed)
};

module.exports.help = {
  name: "shoot"
};
