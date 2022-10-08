export const isBrowser = typeof window !== "undefined";

export function isExternalLink(url) {
    if (typeof window !== "undefined") {
        const tmp = document.createElement("a");
        tmp.href = url;
        return tmp.host !== window.location.host;
    }
}