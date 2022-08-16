// lib
import {throttle} from "lodash";
import { useEffect, useState } from "react";

let defaultX;
let defaultY;

if (typeof window !== "undefined") {
    defaultX = window.scrollX;
    defaultY = window.scrollY;
}

export default function useWindowScrollPosition(options = {}) {
    const { throttleMs = 100 } = options;
    const [scroll, setScroll] = useState({
        x: defaultX,
        y: defaultY,
    });

    const handleScroll = throttle(() => {
        setScroll({
            x: window.scrollX,
            y: window.scrollY,
        });
    }, throttleMs);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scroll;
}
