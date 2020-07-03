const Discord = require('discord.js');
const { inspect } = require('util');
const ownerid = '638980958988795904';
const fs = require('fs');

module.exports.run = async (bot, msg, args, con) => {
  if (msg.author.id !== '638980958988795904') return msg.reply('haha ur dumb');
    let toEval = args.slice(1).join(' ');
    let evaluated = inspect(eval(toEval, { depth: 0 }))
    try {
      if(toEval) {
        let hrStart = process.hrtime();
        let hrDiff;
        hrDiff = process.hrtime(hrStart);
        const eval = new Discord.MessageEmbed()
         .setColor('#e2befb')
         .setTitle(`Evaluation`)
         .addField('Input', `\`\`\`javascript\n${args.join(' ')}\n\`\`\``, true)
         .addField('\u200b', '\u200b')
         .addField('Output', `${`\`\`\`javascript\n${evaluated}\n\`\`\``}`, true)
         .setTimestamp()
         .setFooter(msg.member.user.tag, msg.member.user.avatarURL())

        return msg.channel.send(eval);
      } else {
        msg.channel.send('Nothing to evaluate u dumb hoe');
      }
    } catch(e) {
      msg.channel.send(`im a retard and cannot understand what u saying lol, but here is the error i got: \`${e.message}\` `);
    }
}

module.exports.help = {
  name: "what"
};
