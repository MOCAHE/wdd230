const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=41097c3e44d32ccc023c97b5946ed90b';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// // In Dev Tool, the current temperature is found under "main" and is named "temp". Write the temperature value to "currentTemp" element variable. Use the "innerHTML" property.
// function displayResults(weatherdata) {
//     currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`; // Since this is an output statement, toFixed(0) is use to format the temperature to show no decimal places.
//     const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`; // Use a variable to store the image address which needs to be stringed together in a literal to provide an accurate source.
//     const desc = weatherdata.weather[0].description; // Use a variable to store the weather description.
//     weatherIcon.setAttribute('src', iconsrc); // Set the src attribute for the <img> with the id of 'weathericon'.
//     weatherIcon.setAttribute('alt', desc); // Set the alt attribute for the <img> for accessibility.
//     captionDesc.textContent = desc;
// }
// Este código no es mio, pero lo explica muy bien. 

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weatherIcon');
    captionDesc.textContent = `${desc}`;
}

apiFetch();