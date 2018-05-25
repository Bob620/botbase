class Channel {
	constructor(channel) {
		this.data = {
			channel,
			id: channel.id,
			type: channel.type
		}
	}

	getId() {
		return this.data.id;
	}

	getType() {
		return this.data.type;
	}
}

modules.export = Channel;