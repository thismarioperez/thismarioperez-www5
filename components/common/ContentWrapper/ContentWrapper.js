import styles from "./ContentWrapper.module.scss";
import durations from "@/styles/exports/durations.module.scss";

// lib
import useStore from "@/store";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import cx from "classnames";
import shallow from "zustand/shallow";

// components
import { CSSTransition } from "react-transition-group";

function ContentWrapper({ className, children, ...rest }) {
    const { headerOffset, isLoading } = useStore(
        (state) => ({
            headerOffset: state.header.offset,
            isLoading: state.global.isLoading,
        }),
        shallow
    );
    const { ref, inView } = useInView({
        threshold: 0.75,
        rootMargin: `${headerOffset}px 0px -50px 0px`,
        triggerOnce: false,
    });
    const _ref = useRef(null);
    return (
        <div className={cx(styles.wrapper, className)} ref={ref} {...rest}>
            <CSSTransition
                in={inView && !isLoading}
                timeout={parseInt(durations["2"])}
                ref={_ref}
            >
                <div className={styles.content}>{children}</div>
            </CSSTransition>
        </div>
    );
}

export default ContentWrapper;
