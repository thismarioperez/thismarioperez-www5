// styles
import "@/styles/app.scss";
import "@fontsource/source-code-pro/200.css";
import "@fontsource/source-code-pro/200-italic.css";
import "@fontsource/source-code-pro/400.css";
import "@fontsource/source-code-pro/400-italic.css";
import "@fontsource/source-code-pro/700.css";
import "@fontsource/source-code-pro/700-italic.css";

import TheLayout from "@/components/TheLayout";
import { detect } from "@/scripts/core";

detect.init();

function MyApp({ Component, pageProps }) {
    return (
        <TheLayout>
            <Component {...pageProps} />
        </TheLayout>
    );
}

export default MyApp;
