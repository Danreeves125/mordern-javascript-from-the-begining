class Weather {
    constructor(city) {
        this.apiKey = '7f5f6ae7107e3aff067409697cadf4e6';
        this.city = city;
    }

    // Fetch Weather from API
    async getWeather() {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather Location
    changeLocation(city) {
        this.city = city;
    }
}