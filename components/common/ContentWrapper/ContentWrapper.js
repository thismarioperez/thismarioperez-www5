import styles from "./ContentWrapper.module.scss";

// lib
import durations from "@/styles/exports/durations.module.scss";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

// components
import { CSSTransition } from "react-transition-group";

function ContentWrapper({ children, ...rest }) {
    const { ref, inView } = useInView({
        threshold: 0.6,
        // triggerOnce: true,
    });
    const _ref = useRef(null);
    return (
        <div className={styles.wrapper} ref={ref} {...rest}>
            <CSSTransition
                in={inView}
                timeout={parseInt(durations["2"])}
                ref={_ref}
            >
                <div className={styles.content}>{children}</div>
            </CSSTransition>
        </div>
    );
}

export default ContentWrapper;
