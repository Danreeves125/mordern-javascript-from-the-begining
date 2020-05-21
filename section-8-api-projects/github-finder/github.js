class Github {
    constructor() {
        this.client_id = 'c66dfc282bbd6e3e86d4';
        this.client_secret = 'f837fad2488d07b6181bcc0e2ee22cfd4563e6ab';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {
            profile: profileData
        }
    }
}