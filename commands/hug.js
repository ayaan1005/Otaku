function doHugAction() {
    var rand = [
        'https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif',
        'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
        'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif',
        'https://media.giphy.com/media/wnsgren9NtITS/giphy.gif',
        'https://media.giphy.com/media/du8yT5dStTeMg/giphy.gif',
        'https://media.giphy.com/media/nUz7d1sUppGta/giphy.gif',
        'https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif',
        'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
        'https://media.giphy.com/media/L5f4Z5JoOKARG/giphy.gif',
        'https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif',
        'https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif',
        'https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif',
        'https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif',
        'https://media.giphy.com/media/TGqhg8CXipgzK8UEdr/giphy.gif',
        'https://media.giphy.com/media/12cn5ERxgFV9KM/giphy.gif',
        'https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif',
   
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}

const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, msg, args) => {

    let personTagged = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || 'no one';
    if(personTagged === 'no one') return msg.reply('you must mention someone to hug them silly');
    
    const hugembed1 = new Discord.MessageEmbed()
        .setColor('#ffc60a')
           .setTitle(`${msg.author.tag} hugs ${personTagged.user.tag}`)
        .setImage(doHugAction())
          .setTimestamp()
          .setFooter('©MICHAEL', msg.member.user.avatarURL())

      msg.channel.send(hugembed1)
};

module.exports.help = {
  name: "hug"
};
