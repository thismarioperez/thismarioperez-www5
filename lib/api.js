import fetch from "isomorphic-fetch";
import { AllPages, NavigationBySlug, PageBySlug } from "./models";

const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

async function apiFetch(query = "", config = {}) {
    const { variables = {} } = config;
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

export async function getAllPages() {
    return apiFetch(AllPages);
}

export async function getNavigationBySlug(SLUG) {
    return apiFetch(NavigationBySlug, { variables: { SLUG } });
}

export async function getPageBySlug(SLUG) {
    return apiFetch(PageBySlug, { variables: { SLUG } });
}
