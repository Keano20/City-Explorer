async function apiCall() {
    const url = "photon.komoot.io/api/?q=";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}
