class Github {
	constructor() {
		this.client_id = 'd535e83a02e85f214688';
		this.client_secret = 'f910d627fc21787175f71f66573897316bf7556f';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();

		return {
			profile
		};
	}
}
