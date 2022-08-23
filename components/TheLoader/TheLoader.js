import styles from "./TheLoader.module.scss";
import durations from "@/styles/exports/durations.module.scss";

import { useEffect, useState } from "react";
import useStore from "@/store";
import { useRouter } from "next/router";
import { gsap } from "@/lib/gsap";
import { shallow } from "immer";

import { Transition } from "react-transition-group";
import Section from "../common/Section";

function TheLoader() {
    const { isLoading, startLoading, finishLoading } = useStore(
        (state) => ({
            isLoading: state.global.isLoading,
            startLoading: state.global.startLoading,
            finishLoading: state.global.finishLoading,
        }),
        shallow
    );
    const [isVisible, setIsVisible] = useState(false);
    const { asPath, events } = useRouter();

    useEffect(() => {
        const handleStart = (url) => {
            return url !== asPath && setIsVisible(true);
        };
        const handleComplete = (url) => {
            return url === asPath && setIsVisible(false);
        };

        events.on("routeChangeStart", handleStart);
        events.on("routeChangeComplete", handleComplete);
        events.on("routeChangeError", handleComplete);

        () => {
            events.off("routeChangeStart", handleStart);
            events.off("routeChangeComplete", handleComplete);
            events.off("routeChangeError", handleComplete);
        };
    }, [asPath, events]);

    useEffect(() => {
        if (isVisible) {
            startLoading();
        }
    }, [isVisible]);

    return (
        <Transition
            in={isVisible}
            timeout={parseInt(durations["1"])}
            mountOnEnter={true}
            unmountOnExit={true}
            onEnter={(n) => {
                gsap.set(n, {
                    alpha: 0,
                });
            }}
            addEndListener={(n, done) => {
                if (isVisible) {
                    gsap.to(n, {
                        alpha: 1,
                        onComplete: done,
                    });
                } else {
                    gsap.to(n, {
                        alpha: 0,
                        onComplete: () => {
                            finishLoading();
                            done();
                        },
                    });
                }
            }}
        >
            <Section className={styles.wrapper}></Section>
        </Transition>
    );
}

export default TheLoader;
