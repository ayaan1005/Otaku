const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./config.json');
require('dotenv/config');
const token = process.env.otakugirl;
const prefix = cfg.prefix;
const fs = require('fs'); //creates a new client
const client = bot;
bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split('.').pop() === 'js');
  if (jsfile.length <= 0) {
    console.log('No commands');
  };
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded.`)
    bot.commands.set(props.help.name, props)
  });
});
bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    bot.user.setActivity(`bank accounts`, { type: 'WATCHING' });
});

bot.on('message', msg => {
  if (msg.author.bot) return;
  if(msg.channel.type === "dm") return;
  if(!msg.content.toLowerCase().includes(prefix)) return;
  let mmsg = msg.content.toLowerCase();
  if (!mmsg.startsWith(cfg.prefix)) return;
  let messageArray = mmsg.slice(1).split(' ');
  let cmd = messageArray[0];
  let args = msg.content.split(' ')
  console.log(messageArray);
  let commandfile = bot.commands.get(cmd);

  if(commandfile) {
    commandfile.run(bot, msg, args);
  }
});

bot.login(token);
