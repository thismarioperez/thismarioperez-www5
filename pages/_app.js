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
import { gsap } from "@/lib/gsap";
import useStore from "@/store";
import shallow from "zustand/shallow";
import {constants, detect } from "@/scripts/core";

import Script from "next/script";
import TheLayout from "@/components/TheLayout";

detect.init();

function MyApp({ Component, pageProps }) {
    const { route, query, asPath } = useRouter();
    const { finishLoading } = useStore(
        (state) => ({
            finishLoading: state.global.finishLoading,
        }),
        shallow
    );

    useEffect(() => {
        if (document) {
            document.body.dataset.routerRoute = route;
            document.body.dataset.routerAsPath = asPath;
        }
    }, [route, query, asPath]);

    useEffect(() => {
        let el = document.getElementById("intro");
        if (el) {
            gsap.to(el, {
                alpha: 0,
                ease: "ease",
                duration: 0.6,
                onComplete: () => {
                    if (el && el.parentNode) {
                        el.parentNode.removeChild(el);
                        finishLoading();
                    }
                },
            });
        }
    }, [finishLoading]);


    useEffect(() => {
        console.log(constants);
    });
    return (
        <>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${constants.GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${constants.GA_MEASUREMENT_ID}');
            `}
            </Script>
            <TheLayout>
                <Component {...pageProps} />
            </TheLayout>
        </>
    );
}

export default MyApp;
