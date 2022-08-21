import styles from "./ScrollProgressBar.module.scss";

import { useEffect, useState } from "react";

function ScrollProgressBar() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
    
        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
    
            setScroll(Math.min(scroll, 1));
        }
    
        window.addEventListener("scroll", progressBarHandler);
    
        return () => window.removeEventListener("scroll", progressBarHandler);
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.bar} style={{transform: `scale(1, ${scroll})`}} />
        </div>
    );
}

export default ScrollProgressBar;
