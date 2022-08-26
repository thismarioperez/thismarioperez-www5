// styles
import "@/styles/app.scss";
import "@fontsource/source-code-pro/200.css";
import "@fontsource/source-code-pro/200-italic.css";
import "@fontsource/source-code-pro/400.css";
import "@fontsource/source-code-pro/400-italic.css";
import "@fontsource/source-code-pro/700.css";
import "@fontsource/source-code-pro/700-italic.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

import TheLayout from "@/components/TheLayout";
import { detect } from "@/scripts/core";

detect.init();

function MyApp({ Component, pageProps }) {
    const { route, query, asPath } = useRouter();

    useEffect(() => {
        if (document) {
            document.body.dataset.routerRoute = route;
            document.body.dataset.routerAsPath = asPath;
        }
    }, [route, query, asPath]);

    return (
        <TheLayout>
            <Component {...pageProps} />
        </TheLayout>
    );
}

export default MyApp;
