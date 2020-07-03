function doLickAction() {
    var rand = [
        'https://media.giphy.com/media/1HxRDPWBwsF7G/giphy.gif',
        'https://i.imgur.com/Rj2zIBU.gif',
        'https://i.imgur.com/9hvpn0V.gif',
        'https://i.imgur.com/90vKCzw.gif',
        'https://i.imgur.com/vLZaWB8.gif',
        'https://media.giphy.com/media/8GiREm7aqMwN2/giphy.gif',
        'https://i.imgur.com/wLV0Z40.gif',
        'https://i.imgur.com/spdMTtC.gif',
        'https://i.imgur.com/mCLNteg.gif',
        'https://i.imgur.com/Clk8A6M.gif',
        'https://media.giphy.com/media/zPmxNA1gZvEhG/giphy.gif',
        'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
        'https://media.giphy.com/media/10DRaO76k9sgHC/giphy.gif',
        'https://media.giphy.com/media/HSfLNyKksXbZC/giphy.gif',
        'https://media.giphy.com/media/OQ7phVSLg3xio/giphy.gif',
        'https://media.giphy.com/media/tX29X2Dx3sAXS/giphy.gif',
        'https://media.giphy.com/media/vcShFtinE7YUo/giphy.gif',
        'https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif',
        'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
        
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}

const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, msg, args) => {

    let personTagged = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || 'no one';
    if(personTagged === 'no one') return msg.reply('you must mention someone to lick');
    
    const lickembed1 = new Discord.MessageEmbed()
        .setColor('#2cd5c4')
        .setTitle(`${msg.author.tag} :tongue: tries to lick ${personTagged.user.tag}`)
        .setImage(doLickAction())
        .setTimestamp()
        .setFooter('| Submitted by ©MICHAEL',msg.member.user.avatarURL()) 

      msg.channel.send(lickembed1)
};

module.exports.help = {
  name: "lick"
};
