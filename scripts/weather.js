// Select HTML elements in the document.
const temperature = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('figcaption');

// Create an "url" variable using const that stores the 'https://api.openweathermap.org/...' URL as demonstrated in the API documentation given.
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=19.44&lon=-99.13&units=metric&appid=41097c3e44d32ccc023c97b5946ed90b';
// Defined asynchronous function that will use fetch() to request the given weather api url and then try to convert the response using a JSON parser that is built-in.
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // This is for testing the call.
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


// In Dev Tool, the current temperature is found under "main" and its named "temp". Write the temperature value to "temperature" element variable. Use the "innerHTML" property.
function displayResults(weatherdata) {
    temperature.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`; // Since this is an output statement, toFixed(0) is use to format the temperature to show no decimal places.
    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`; // Use a variable to store the image address which needs to be stringed together in a literal to provide an accurate source.
    const desc = weatherdata.weather[0].description; // Use a variable to store the weather description.
    weatherIcon.setAttribute('src', iconsrc); // Set the src attribute for the <img> with the id of 'weathericon'.
    weatherIcon.setAttribute('alt', desc); // Set the alt attribute for the <img> for accessibility.
    captionDesc.textContent = `${desc}`;
} 

apiFetch();
