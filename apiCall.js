export async function apiCall() {
    const apiUrl = "https://api.api-ninjas.com/v1/city";
    try {
        const response = await fetch(apiUrl);
        console.log(response);
        if (!response.ok) {
            console.error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

