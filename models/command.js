class Command {
	constructor({helpMessage='', name=''}) {
		this.data = {
			name,
			helpMessage
		}
	}

	async help() {
		return this.data.helpMessage;
	}

	async execute() {
	}
}

modules.export = Command;