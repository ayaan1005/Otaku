function doKissAction() {
    var rand = [
        'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
        'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
        'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
        'https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif',
        'https://media.giphy.com/media/oHZPerDaubltu/giphy.gif',
        'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
        'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
        'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
        'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif',
        'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
        'https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif',
        'https://media.giphy.com/media/YC4QEtFmz64sE/giphy.gif',
        'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
        'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
        'https://media.giphy.com/media/PivShcAVhKARq/giphy.gif',
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}

const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, msg, args) => {

    let personTagged = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || 'no one';
    if(personTagged === 'no one') return msg.reply('you must mention someone to kiss them silly');
    
    const kissembed1 = new Discord.MessageEmbed()
        .setColor('#000000')
           .setTitle(`${msg.author.tag} kissed ${personTagged.user.tag}`)
        .setImage(doKissAction())
          .setTimestamp()
          .setFooter(msg.member.user.tag, msg.member.user.avatarURL())

      msg.channel.send(kissembed1)
};

module.exports.help = {
  name: "kiss"
};
