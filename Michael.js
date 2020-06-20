const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzE1NTI1NjM4ODg2MzkxODI5.XuzysA.xk6SuY3qwnhfDSUyMf18SO8pOoo';
const PREFIX = '>';

client.on('ready', () => {
	console.log('Nelz is online!')
	client.user.setPresence({
		game: {
			name: "Ice and Fire"
		}
	});
})
