// styles
import styles from "./ScrollIndicator.module.scss";

// lib
import { gsap } from "@/lib/gsap";
import { useLayoutEffect, useRef, useState } from "react";

function ScrollIndicator() {
    const ref = useRef(ref);
    const [scroll, setScroll] = useState(0);

    useLayoutEffect(() => {
        let progressBarHandler = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(Math.min(scroll, 1));
        };

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });

    useLayoutEffect(() => {
        gsap.to(ref.current, {
            scaleX: scroll,
        });

        return (() => {
            gsap.killTweensOf(ref.current);
        });
    }, [scroll]);

    return (
        <div className={styles.wrapper}>
            <div ref={ref} className={styles.bar} style={{transform: `translate(${scroll}, 1)`}}/>
        </div>
    );
}

export default ScrollIndicator;
