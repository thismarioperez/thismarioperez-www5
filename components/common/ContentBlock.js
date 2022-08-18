// lib
import durations from "@/styles/exports/durations.module.scss";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

// components
import { CSSTransition } from "react-transition-group";

function ContentBlock({ children, ...props }) {
    const { ref, inView } = useInView({
        threshold: 0.6,
        // triggerOnce: true,
    });
    const _ref = useRef(null);
    return (
        <div className="block" ref={ref} {...props}>
            <CSSTransition
                classNames="content"
                in={inView}
                timeout={parseInt(durations["2"])}
                ref={_ref}
            >
                <div className="content">{children}</div>
            </CSSTransition>
        </div>
    );
}

export default ContentBlock;
