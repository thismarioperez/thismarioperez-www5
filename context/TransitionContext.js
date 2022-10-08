import React, { useState, createContext } from "react";
import { gsap } from "@/lib/gsap";

const TransitionContext = createContext({});

const createTimeline = () => {
    return gsap.timeline({
        paused: true,
        onComplete: () => {
            console.log("page transition complete");
        },
    });
};

const TransitionProvider = ({ children }) => {
    const [timeline, setTimeline] = useState(createTimeline());

    const resetTimeline = () => {
        setTimeline(createTimeline());
    };

    return (
        <TransitionContext.Provider
            value={{
                timeline,
                setTimeline,
                resetTimeline,
            }}
        >
            {children}
        </TransitionContext.Provider>
    );
};

export { TransitionContext, TransitionProvider };
