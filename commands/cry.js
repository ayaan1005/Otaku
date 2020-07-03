function doCryAction() {
    var rand = [
        'https://media.tenor.com/images/559711246ddb0e79916f54022c347cc9/tenor.gif',
        'https://media.giphy.com/media/shVJpcnY5MZVK/giphy.gif',
        'https://media.giphy.com/media/YJ4AynOvIRZAs/giphy.gif',
        'https://media.giphy.com/media/k63gNYkfIxbwY/giphy.gif',
        'https://media.giphy.com/media/jxbzLNeT18a3K/giphy.gif',
        'https://media.giphy.com/media/ShPv5tt0EM396/giphy.gif',
        'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif',
        'https://media.giphy.com/media/1hMJTkDXPTBiU/giphy.gif',
        'https://media.giphy.com/media/AI7yqKC5Ov0B2/giphy.gif',
        'https://media.giphy.com/media/87HkPDUOtN0TC/giphy.gif',
        'https://media.giphy.com/media/jOsWuvugRUcGk/giphy.gif',
        'https://media.giphy.com/media/Xqlsn2kLPBquI/giphy.gif',
        'https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif',
        'https://media.giphy.com/media/KyitNZY4bNoXK/giphy.gif',
        'https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif',
        'https://media.giphy.com/media/10tIjpzIu8fe0/giphy.gif',
        'https://media.giphy.com/media/FKNRErpZ0xoas/giphy.gif',
        'https://media.giphy.com/media/dYo5SsWTzHu8w/giphy.gif',
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}

const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, msg, args) => {

    let personTagged = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || 'no one';
    if(personTagged === 'no one') return msg.reply('you must mention someone');
    
    const cryembed1 = new Discord.MessageEmbed()
        .setColor('#2cd5c4')
           .setTitle(`${msg.author.tag} :cry: cries ${personTagged.user.tag}`)
        .setImage(doCryAction())
          .setTimestamp()
          .setFooter('©MICHAEL',msg.member.user.avatarURL())

      msg.channel.send(cryembed1)
};

module.exports.help = {
  name: "cry"
};
