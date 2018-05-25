const { Collection } = require('discord.js');

class Guild {
	constructor(guild) {
		this.data = {
			guild
		}
	}

	getVoiceChannel() {
		return this.data.voiceChannel;
	}

	setVoiceChannel(voiceChannel) {
		this.data.voiceChannel = voiceChannel;
	}

	getChannels() {
		return this.isAvailable() ? this.data.guild.channels : new Collection();
	}

	getMembers() {
		return this.isAvailable() ? this.data.guild.members : new Collection();
	}

	isAvailable() {
		return this.data.guild.available;
	}
}

modules.export = Guild;