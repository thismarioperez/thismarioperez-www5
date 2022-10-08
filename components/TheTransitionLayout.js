// lib
import {useContext, useMemo, useState } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const memoizedChildren = useMemo(() => children, [children]);
    const { timeline, resetTimeline } = useContext(TransitionContext);

    useIsomorphicLayoutEffect(() => {
        if (memoizedChildren !== displayChildren) {
            // console.log("children not equal");
            if (timeline.duration() === 0) {
                // there are no outro animations, so immediately transition
                setDisplayChildren(children);
            } else {
                timeline.play().then(() => {
                    // console.log("page transition played");
                    // outro complete so reset to an empty paused timeline
                    resetTimeline();
                    setDisplayChildren(children);
                });
            }
        }
    }, [memoizedChildren]);

    return <div>{displayChildren}</div>;
}