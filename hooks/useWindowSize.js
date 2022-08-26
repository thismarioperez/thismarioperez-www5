import { useEffect, useState } from "react";

export default function useWindowSize() {
    const isSSR = typeof window === "undefined";
    const [windowSize, setWindowSize] = useState({
        width: isSSR ? 1200 : window.innerWidth,
        height: isSSR ? 800 : window.innerHeight,
    });

    function handleResize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
}
