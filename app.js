import {apiCall} from "./apiCall.js";

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener("submit", async event =>{
    event.preventDefault();

    const city = searchInput.value;

    if(city){
        try{
            const cityData = await apiCall(city);
            await displayCityData(cityData);
        }
        catch (error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city")
    }
})

async function displayCityData({ cityData, weatherData }) {
    console.log(cityData);
    console.log( weatherData);

    const cardsContainer = document.querySelector('.cards');
    cardsContainer.style.display = 'grid';
    cardsContainer.innerHTML = ''; // Clear previous results

    // Ensure cityData and weatherData are valid
    if (cityData.data && Array.isArray(cityData.data)) {
        cityData.data.forEach(city => {
            const card = document.createElement('article');

            // Create card content
            card.innerHTML = `
                <h2>${city.city}</h2>
                <p>Region: ${city.region}</p>
                <p>Country: ${city.country}</p>
                <hr>
                <h2>Current weather</h2>
                <p>Temperature (°C): ${weatherData.temp_c}</p>
                <p>Temperature (°F): ${weatherData.temp_f}</p>
                <p>Feels Like (°C): ${weatherData.feelslike_c}</p>
                <p>Feels Like (°F): ${weatherData.feelslike_f}</p>
                <p>Humidity: ${weatherData.humidity}%</p>
            `;

            // Append the card to the container
            cardsContainer.appendChild(card);
        });
    } else {
        // Fallback message if no city data found
        const message = document.createElement('p');
        message.textContent = 'No results found or invalid response from the API.';
        cardsContainer.appendChild(message);
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
}