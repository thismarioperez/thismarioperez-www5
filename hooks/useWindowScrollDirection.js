// lib
import { useEffect, useState } from "react";
import useWindowScrollPosition from "./useWindowScrollPosition";

export const DIRECTIONS = {
    UP: "UP",
    DOWN: "DOWN",
};

export default function useWindowScrollDirection() {
    const [direction, setDirection] = useState(DIRECTIONS.UP);
    const [lastY, setLastY] = useState(0);
    const { y } = useWindowScrollPosition({ throttleMs: 250 });

    useEffect(() => {
        if (lastY > 0 && y > 0) {
            if (lastY > y) {
                setDirection(DIRECTIONS.UP);
            } else {
                setDirection(DIRECTIONS.DOWN);
            }
        }
        setLastY(y);
    }, [y]);

    return direction;
}
