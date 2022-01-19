var city;

var key = '1253309e30b4fb953c136c1426565be0&units=metric';

async function onSearch() {
    var weatherManager = new WeatherManager()

    city = document.getElementById("cityInput").value
    var url = `api.openweathermap.org/data/2.5/weather?q=${city},{state code}&appid=${key}`;

    if (city) {
        weatherManager.fetchForecast(url).then(() => {
            display(weatherManager.currentForecast)
        })
    }

    document.getElementById("cityInput").value = ""
    city = undefined




}


function display(currentForecast) {
    document.getElementById('city').textContent = currentForecast.city
    document.getElementById('temp').textContent = currentForecast.temp + "" + "°C"


    document.getElementById('desc').textContent = currentForecast.description
    document.getElementById('country').textContent = currentForecast.humidity

}
