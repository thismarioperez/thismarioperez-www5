import { useEffect, useMemo, useState } from "react";
import useWindowSize from "./useWindowSize";
import useDebouncedValue from "./useDebouncedValue";
import * as breakpoints from "@/styles/exports/breakpoints.module.scss";

// Reformat breakpoints as integers instead of number strings with "px"
const __BREAKPOINTS__ = Object.keys(breakpoints).reduce((bps, key) => {
    return {
        ...bps,
        [key]: parseInt(breakpoints[key]),
    };
}, {});

export default function useBreakpoints() {
    const { width } = useWindowSize();
    const debouncedWidth = useDebouncedValue(width, 300);
    const getBps = (_width) => ({
        ...Object.keys(__BREAKPOINTS__).reduce((_bps, key) => {
            return {
                ..._bps,
                [key]: _width >= __BREAKPOINTS__[key],
            };
        }, {}),
    });
    const [bps, setBps] = useState(getBps(debouncedWidth));

    useEffect(() => {
        setBps(getBps(debouncedWidth));
    }, [debouncedWidth]);
    return bps;
}
