export async function apiCall(city) {
    const cityApiUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${city}`;
    const cityApiOptions = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '',
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(cityApiUrl, cityApiOptions);
        return await response.json();
    } catch (error) {
        console.error("API call failed:", error);
        throw error;
    }
}