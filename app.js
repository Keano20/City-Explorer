const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
//const searchButton= document.getElementById('search-button')

searchForm.addEventListener("submit", async(event) =>{
    event.preventDefault();

    const city = searchInput.value;

    if(city){
        try{
            const cityData = await getCityData(city);
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

async function getCityData(city){

    }
async function displayCityData(data){

}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
}


