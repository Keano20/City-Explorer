export async function apiCall(country) {
    const apiUrl = "https://restcountries.com/v3.1/name/"+country;
    return await fetch(apiUrl).then(async res=> await res.json())
         .catch(err=>console.error(err));

}

