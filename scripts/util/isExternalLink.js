export default function isExternalLink(url) {
    if (typeof window !== "undefined") {
        const tmp = document.createElement("a");
        tmp.href = url;
        return tmp.host !== window.location.host;
    }
}
