
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    //HINT: Use template literals to create a url with input and an API key
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
    //CODE GOES HERE
    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((response) => {
        return response.json();
    })
}

searchCity = () => {
    const city = document.getElementById('city-input').value;
   
    getWeatherData(city).then((response) => {
        showWeatherData(response);
    })
}

const temperatureConverter = (valNum) => {
    valNum = parseFloat(valNum);
    document.getElementById('temp').innerText = Math.floor((valNum-32) / 1.8);
}

const temperatureConverterMin = (valNum) => {
    valNum = parseFloat(valNum);
    document.getElementById('min-temp').innerText = Math.floor((valNum-32) / 1.8);
}

const temperatureConverterMax = (valNum) => {
    valNum = parseFloat(valNum);
    document.getElementById('max-temp').innerText = Math.floor((valNum-32) / 1.8);
}

showWeatherData = (weatherData) => {
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('weather-type').innerText = weatherData.weather[0].main;
    temperatureConverter(weatherData.main.temp);
    temperatureConverterMin(weatherData.main.temp_min);
    temperatureConverterMax(weatherData.main.temp_max);
}
