const Discord = require('discord.js');
const { inspect } = require('util');
const ownerid = '641338586922352649';
const fs = require('fs');

module.exports.run = async (bot, msg, args) => {
  if (msg.author.id !== '641338586922352649') return msg.reply('haha ur dumb');
    let toEval = args.slice(1).join(' ');
    let evaluated = inspect(eval(toEval, { depth: 0 }))
    try {
      if(toEval) {
        let hrStart = process.hrtime();
        let hrDiff;
        hrDiff = process.hrtime(hrStart);
      } else {
        msg.channel.send('Nothing to run u dumb hoe');
      }
    } catch(e) {
      msg.channel.send(`im a retard and cannot understand what u saying lol, but here is the error i got: \`${e.message}\` `);
    }
}

module.exports.help = {
  name: "run"
};
