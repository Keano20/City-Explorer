import {apiCall} from "./apiCall.js";

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener("submit", async event =>{
    event.preventDefault();

    const city = searchInput.value;

    if(city){
        try{
            const cityData = await apiCall(city);
            console.log(cityData)
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

async function displayCityData(data) {
    const cardsContainer = document.querySelector('.cards');
    cardsContainer.innerHTML = ''; // Clear previous results

    data.data.forEach(city => {
        const card = document.createElement('article');
        card.innerHTML = `
            <h2>${city.city}</h2>
            <p>Region: ${city.region}</p>
            <p>Country: ${city.country}</p>
        `;
        cardsContainer.appendChild(card);
    });
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
}