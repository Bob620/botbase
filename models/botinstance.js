const EventEmitter = require('events');

const Discord = require('discord.js');

const datastore = require('../util/datastore'),
      dmChannel = require('../channels/dm'),
      groupChannel = require('../channels/group'),
      guildChannel = require('../channels/guild');

class BotInstance extends EventEmitter {
	constructor({token}) {
		super();

		this.data = {
			client: new Discord.Client(),
			guilds: new Map(),
			channels: new Map(),
			commands: new Map()
		};

		this.client.on('ready', () => {
			console.log('Connected to discord');
			this.emit('ready');
		});

		this.client.on('error', err => {
			console.log(err);
		});

		this.client.on('disconnect', () => {
			console.log('disconnected from discord');
			this.emit('disconnect');
		});

		this.client.on('message', message => {
			switch (message.channel.type) {
				case 'dm':
					dmChannel(message.channel);
					break;
				case 'group':
					break;
				case 'text':
					break;
			}
		});

		this.data.client.login(token);
	}
}


datastore.s.members(`${config.redis.prefix}:guilds`).then((guilds) => {

}).catch(err => {

});