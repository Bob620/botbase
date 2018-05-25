const Channel = require('./channel');

class VoiceChannel extends Channel {
	constructor(channel, guildModel) {
		super(channel);

		this.data.guildModel = guildModel;
	}

	join() {
		return new Promise((resolve, reject) => {
			this.data.channel.join().then(async () => {
				resolve();
			}).catch(err => {
				console.log(err);
				reject(err);
			});
		});
	}

	async leave() {
		await this.data.channel.leave();
	}

	getId() {
		return this.data.id;
	}

	getType() {
		return this.data.type;
	}
}

modules.export = VoiceChannel;