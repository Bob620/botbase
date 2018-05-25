const Channel = require('./channel');

class TextChannel extends Channel {
	constructor(channel) {
		super(channel);
	}

	send(message) {
		return new Promise((resolve, reject) => {
			this.data.channel.send(message)
				.then(() => {
					resolve();
				}).catch(err => {
				console.log(err);
				reject(err);
			})
		});
	}

	search(options) {
		return new Promise((resolve, reject) => {
			this.data.channel.search(options)
				.then(() => {
					resolve();
				}).catch(err => {
				console.log(err);
				reject(err);
			})
		});
	}

	getId() {
		return this.data.id;
	}

	getType() {
		return this.data.type;
	}
}

modules.export = TextChannel;