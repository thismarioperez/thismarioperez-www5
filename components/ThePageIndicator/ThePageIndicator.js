import styles from "./ThePageIndicator.module.scss";
import durations from "@/styles/exports/durations.module.scss";

import { useRef, useEffect } from "react";
import useStore from "@/store";
import shallow from "zustand/shallow";
import { useRouter } from "next/router";
import cx from "classnames";
import { gsap } from "@/lib/gsap";

import { Transition } from "react-transition-group";

function ThePageIndicator() {
    const { isLoading } = useStore(
        (state) => ({ isLoading: state.global.isLoading }),
        shallow
    );
    const { asPath } = useRouter();
    const lastAsPath = useRef(asPath);
    const duration = parseInt(durations["2"]) * 0.001;
    const _in =
        !isLoading && asPath.length > 0 && asPath === lastAsPath.current;

    useEffect(() => {
        if (lastAsPath.current) {
            lastAsPath.current = asPath;
        }
    }, [asPath]);
    return (
        <Transition
            in={_in}
            timeout={duration}
            mountOnEnter={true}
            onEnter={(n) => {
                gsap.set(n, {
                    alpha: 0,
                    xPercent: 100,
                });
            }}
            addEndListener={(n, done) => {
                gsap.to(n, {
                    alpha: isLoading ? 0 : 1,
                    xPercent: isLoading ? 100 : 0,
                    ease: "ease",
                    duration,
                    onComplete: done,
                });
            }}
        >
            <div className={cx(styles.wrapper, "-cursor--default")}>
                <div className={cx(styles.inner, "-color--light")}>
                    <div className={styles.content}>{lastAsPath.current}</div>
                </div>
            </div>
        </Transition>
    );
}

export default ThePageIndicator;
