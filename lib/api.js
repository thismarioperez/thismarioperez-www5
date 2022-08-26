/**
 * 
 * IMPORTANT
 * 
 * The nextjs-plugin-preval lib uses this file at build-time, BEFORE
 * nextjs is able to load it's internal jsconfig module. Therefore,
 * this file needs to use relative file paths to prevent breakage at build-time.
 * 
 */
import fetch from "isomorphic-fetch";
import { CONTACT, NAVIGATIONS, PAGES } from "./graphql";
import { constants } from "../scripts/core";

async function apiFetch(query = "", { variables } = {}) {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${constants.API_TOKEN}`,
    };

    const res = await fetch(constants.API_URL, {
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

export async function getHomePage() {
    return apiFetch(PAGES.HomePage);
};

export async function getContact() {
    return apiFetch(CONTACT.AllContact);
}

export async function getAllNavigations() {
    return apiFetch(NAVIGATIONS.AllNavigations);
}

export async function getAllPages() {
    return apiFetch(PAGES.AllPages);
}

export async function getNavigationBySlug(SLUG) {
    return apiFetch(NAVIGATIONS.NavigationBySlug, { variables: { SLUG } });
}

export async function getPageBySlug(SLUG) {
    return apiFetch(PAGES.PageBySlug, { variables: { SLUG } });
}
