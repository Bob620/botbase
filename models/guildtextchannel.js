const TextChannel = require('./textchannel');

class GuildTextChannel extends TextChannel {
	constructor(channel, guildModel) {
		super(channel);

		this.data.guildModel = guildModel;
		this.data.guild = this.data.channel.guild;
		this.data.name = this.data.channel.name;
	}

	getMembers() {
		return this.data.channel.members;
	}

	getGuild() {
		return this.data.guild;
	}

	getName() {
		return this.data.name;
	}
}

modules.export = GuildTextChannel;