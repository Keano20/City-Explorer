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

            // Show the filter form after a successful search
            document.getElementById('filter-container').style.display = 'block';
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

    const cardsContainer = document.querySelector('.cards');
    cardsContainer.style.display = 'grid';
    cardsContainer.innerHTML = ''; // Clear previous results

    if (!cityData.data || cityData.data.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'No results found for your search.';
        message.style.color = 'red';
        message.style.textAlign = 'center';
        message.style.fontWeight = 'bold';
        cardsContainer.appendChild(message);
        return;
    }

    // Ensure cityData and weatherData are valid
    if (cityData.data && Array.isArray(cityData.data)) {
        cityData.data.forEach(city => {
            const card = document.createElement('article');

            // Create card content
            card.innerHTML = `
                <h2>${city.city}</h2>
                <p><b>Region:</b> ${city.region}</p>
                <p><b>Country:</b> ${city.country}</p>
                <hr>
                <h2>Current weather</h2> 
                <p><b>Temperature:</b> ${weatherData.current.temp_c} (°C):</p>
                <p><b>Temperature:</b> ${weatherData.current.temp_f} (°F):</p>
                <br>
                <p><b>Feels Like:</b> ${weatherData.current.feelslike_c} (°C):</p>
                <p><b>Feels Like:</b> ${weatherData.current.feelslike_f} (°F):</p>
                <br>
                <p><b>Humidity:</b> ${weatherData.current.humidity}%</p>
            `;

            // Append the card to the container
            cardsContainer.appendChild(card);
        });
    }
}

function displayError(errorMessage){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = errorMessage;
}