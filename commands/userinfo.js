const Discord = require('discord.js');

  module.exports.run = async (bot, msg, args) => {
    function getJoinRank(ID, guild) { // Call it with the ID of the user and the guild
      if (!guild.member(ID)) return; // It will return undefined if the ID is not valid

       let arr = guild.members.cache.array(); // Create an array with every member
       arr.sort((a, b) => a.joinedAt - b.joinedAt); // Sort them by join date

       for (let i = 0; i < arr.length; i++) { // Loop though every element
         if (arr[i].id == ID) return i; // When you find the user, return it's position
       }
     }
       let person = msg.mentions.members.first();
       if (!person) {
         person = msg.member
       }
       const whois = new Discord.MessageEmbed()
       .setColor('#00ffdf')
       .setTitle(`${person.user.tag}\'s profile`)
       .setDescription('Here is their info')
       .setThumbnail()
       .setImage(person.user.avatarURL())
       .addField('Account Created', person.user.createdAt, true)
       .addField('Joined At', person.joinedAt, true)
       .addField('ID', person.id, true)
       .addField('Join Position', getJoinRank(person.id, msg.guild),true)
       .addField('Roles', person.roles.cache.array(), true)
       .setTimestamp()
       .setFooter(msg.author.tag, msg.author.avatarURL());

        msg.channel.send(whois);
};

module.exports.help = {
  name: "userinfo"
};
