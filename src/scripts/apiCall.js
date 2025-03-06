export async function apiCall(city) {
    const cityApiUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${city}`;
    const weatherApiUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;

    const optionsForCityApi = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '',
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    const optionsForWeatherApi = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    }

    try {
        const [cityResponse, weatherResponse] = await Promise.all([
            fetch(cityApiUrl, optionsForCityApi),
            fetch(weatherApiUrl, optionsForWeatherApi)
        ]);

        const cityData = await cityResponse.json();
        const weatherData = await weatherResponse.json();

        // I'm logging this for debugging reasons.
        console.log("City Data:", cityData);
        console.log("Weather Data:", weatherData);

        return { cityData, weatherData };

    } catch (error) {
        console.error("API call failed:", error);
        throw error;
    }
}