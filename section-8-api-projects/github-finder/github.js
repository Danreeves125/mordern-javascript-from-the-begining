class Github {
    constructor() {
        this.client_id = 'c66dfc282bbd6e3e86d4';
        this.client_secret = 'f837fad2488d07b6181bcc0e2ee22cfd4563e6ab';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();

        return {
            profile: profileData,
            repos: repoData
        }
    }


}