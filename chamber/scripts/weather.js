const weatherIconEl = document.getElementById("current-weather-icon");
const currentTempEl = document.getElementById("current-temp");
const weatherDescEl = document.getElementById("current-weather-desc");
const forecastEl = document.querySelector(".weather-forecast-container");
// Coordenadas de Ciudad de México
const lat = 19.45;
const lon = -99.12;
const weatherApiKey = "41097c3e44d32ccc023c97b5946ed90b";
const baseUrl = "https://api.openweathermap.org/data/2.5/"
const currentWeatherEndpoint = `/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`;
const forecastWeatherEndpoint = `forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`;

async function getCurrentWeatherData() {
    try {
        const response = await fetch(baseUrl + currentWeatherEndpoint);
        if (!response.ok) {
            throw new Error(await response.text());
        }
        const data = await response.json();
        displayCurrentWeather(data);
    } catch (error) {
        console.log(error);
    }
}

const displayCurrentWeather = (data) => {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    currentTempEl.innerHTML = `${data.main.temp}&deg;C`;

    weatherIconEl.setAttribute('src', iconsrc);
    weatherIconEl.setAttribute('alt', desc);
    weatherIconEl.setAttribute('loading', 'lazy');
    weatherDescEl.textContent = `${desc}`;
}

async function getForecastWeatherData() {
    try {
        const response = await fetch(baseUrl + forecastWeatherEndpoint);

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const data = await response.json();

        displayForecastWeather(filterForecastData(data.list));
    } catch (error) {
        console.log(error);
    }
}

const displayForecastWeather = (data) => {
    let forecastHTML = "";

    data.forEach(forecastRow => {
        forecastHTML += `
    <div class="weather-forecast-card">
    <p class="text-center">${new Intl.DateTimeFormat('en-US', { year: "numeric", month: "short", day: "numeric" }).format(new Date(forecastRow.dt_txt))}</p>
    <p class="text-center">${forecastRow.main.temp}&deg;C</p>
    </div>
    `
    });

    forecastEl.innerHTML = forecastHTML;
}

const filterForecastData = (weatherArr) => {
    let currentDate = new Date();
    let currentDay = currentDate.getDate();

    return weatherArr.filter(weatherRow => {
        let weatherDate = new Date(weatherRow.dt_txt);
        let weatherDay = weatherDate.getDate();
        let weatherHour = weatherDate.getHours();

        return weatherDay > currentDay && weatherHour === 12;
    }).slice(0, 3);
}

getCurrentWeatherData();
getForecastWeatherData();

// Este código es creación de mi compañero Aaron