// lib
import durations from "@/styles/exports/durations.module.scss";
import { useInView } from "react-intersection-observer";

// components
import { CSSTransition } from "react-transition-group";

function ContentBlock({ children }) {
    const { ref, inView } = useInView({
        threshold: 0.6,
        // triggerOnce: true,
    });
    return (
        <div className="block" ref={ref}>
            <CSSTransition
                classNames="content"
                in={inView}
                timeout={parseInt(durations["2"])}
            >
                <div className="content">
                    {children}
                </div>
            </CSSTransition>
        </div>
    );
}

export default ContentBlock;
