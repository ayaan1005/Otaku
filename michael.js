const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzE0NjQxMjU0NTQ1MzU4ODk5.Xux-tA.OA1UTq37Pkk--VSaQzdVSXtGcbQ';
const PREFIX = '+';

client.on('ready', () => {
	console.log('Nelz is online!')
	client.user.setPresence({
		game: {
			name: "with Michael"
		}
	});
})

client.on('message', async(message) => {
	try {
		if (!message.guild || message.author.bot) return;
		if (!message.content.startsWith(PREFIX)) return;
		const args = message.content.split(' ');
		if (!args[0]) return;
		const command = args.shift().slice(PREFIX.length).toLowerCase();
		if (command === 'ping') {
			await message.channel.send(`Ping is ${Math.round(client.ping)}ms`);
		}
		if (command === 'ban') {
			if (!message.member.hasPermission('BAN_MEMBERS')) {
				await message.channel.send('You have no permissions to do this command');
				return;
			}
			if (!message.mentions.members.size) {
				await message.channel.send('You did not mention anyone');
				return;
			}
			const member = message.mentions.members.first();
			await member.ban('He was being bad');
		}
		if (command === 'kick') {
			if (!message.member.hasPermission('KICK_MEMBERS')) {
				await message.channel.send('You have no permissions to do this command');
				return;
			}
			if (!message.mentions.members.size) {
				await message.channel.send('You did not mention anyone');
				return;
			}
			const member = message.mentions.members.first();
			await member.kick('He was being bad');
		}
	} catch (error) {
		console.error(error);
	}

})
client.login(token);
