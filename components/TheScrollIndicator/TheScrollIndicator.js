// styles
import styles from "./TheScrollIndicator.module.scss";

// lib
import useStore from "@/store";
import { useEffect, useState } from "react";
import { shallow } from "immer";

function TheScrollIndicator() {
    const [scroll, setScroll] = useState(0);
    const { headerOffset } = useStore((state) => ({
        headerOffset: state.global.headerOffset,
    }));

    useEffect(() => {
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

    return (
        <div className={styles.wrapper} style={{ top: `${headerOffset}px` }}>
            <div
                className={styles.bar}
                style={{ transform: `scale(${scroll}, 1)` }}
            />
        </div>
    );
}

export default TheScrollIndicator;
