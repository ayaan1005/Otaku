function doSleepyAction() {
    var rand = [
        'https://i.imgur.com/ePmG4TQ.png',
        'https://i.imgur.com/h6aB2eJ.png',
        'https://i.imgur.com/eOPwewY.png', 
        'https://i.imgur.com/DSIfuTa.png', 
        'https://i.imgur.com/tFCG6T2.png', 
        'https://i.imgur.com/qZLWPNH.png', 
        'https://i.imgur.com/n0jzJ7e.png',
        'https://i.imgur.com/KGzutFZ.png', 
        'https://i.imgur.com/OfZfyFP.png',
        'https://i.imgur.com/D1IKCEz.png', 
        'https://i.imgur.com/fakQWYa.png',
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}

const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, msg, args) => {

    let personTagged = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || 'no one';
    if(personTagged === 'no one') return msg.reply('you must mention someone to sleep');
    
    const sleepyembed1 = new Discord.MessageEmbed()
        .setColor('#e97fa5')
        .setTitle(`${msg.author.tag} :sleeping: sleeps next to ${personTagged.user.tag}`)
        .setImage(doSleepyAction())
        .setTimestamp()
        .setFooter('| Submitted by Queen | Authorized ©MICHAEL',msg.member.user.avatarURL())

      msg.channel.send(sleepyembed1)
};

module.exports.help = {
  name: "sleepy"
};
