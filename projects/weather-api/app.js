// Init Storgage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init Weather Object
const weather = new Weather(weatherLocation.city);
// Init UI Class
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    weather.changeLocation(city);

    // set location in LS
    storage.setLocationData(city);

    // Get Weather
    getWeather();

    $('#locPopup').modal('hide');

    e.preventDefault();
});


function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}