const fetch = require("node-fetch");

let API_KEY = process.env.SPOONACULAR_API;

exports.handler = async (event, context) => {

    let path = event.path.split("/.netlify/functions/recipes")[1];
    let API_ENDPOINT = `https://api.spoonacular.com/recipes${path}?apiKey=${API_KEY}`

    if(event.headers.parameters) {
        for (const [key, value] of Object.entries(JSON.parse(event.headers.parameters))) {
            API_ENDPOINT = API_ENDPOINT.concat(`&${key}=${value}`);
        }
    }

    try {
        const response = await fetch(`${API_ENDPOINT}`);
        const data = await response.json();
        const body = JSON.stringify({
            recipes: data.recipes,
        })
        return { statusCode: 200, body: JSON.stringify({...data}) };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed fetching data' }),
        };
    }

};
