const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// culicanan
const url = 'http://api.openweathermap.org/data/2.5/forecast?lat=24.80&lon=-107.38&appid=41097c3e44d32ccc023c97b5946ed90b';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data){
    // Limpiar contenido anterior
    currentTemp.innerHTML = '';
    captionDesc.textContent = '';

    // Iterar sobre los datos para los próximos tres momentos (3 días)
    for (let i = 0; i < 3; i++) {
        const momentData = data.list[i];
        const temp = momentData.main.temp;
        const iconsrc = `https://openweathermap.org/img/w/${momentData.weather[0].icon}.png`;
        const desc = momentData.weather[0].description;

        // Crear elementos para mostrar la información
        const tempElement = document.createElement('p');
        tempElement.innerHTML = `${temp}&deg;F`;

        const iconElement = document.createElement('img');
        iconElement.setAttribute('src', iconsrc);
        iconElement.setAttribute('alt', 'weatherIcon');

        const descElement = document.createElement('p');
        descElement.textContent = desc;

        // Agregar elementos al DOM
        currentTemp.appendChild(tempElement);
        currentTemp.appendChild(iconElement);
        captionDesc.appendChild(descElement);
    }
}

apiFetch();

