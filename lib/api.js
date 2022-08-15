import fetch from "isomorphic-fetch";

const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

async function apiFetch(query = "", { variables }) {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
    };

    const res = await fetch(API_URL, {
        headers,
        method: "POST",
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error("Failed to fetch API");
    }
    return json.data;
}

export default apiFetch;
