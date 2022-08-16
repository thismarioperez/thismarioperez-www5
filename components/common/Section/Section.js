// styles
import styles from "./Section.module.scss";

// lib
import useStore from "@/store";
import { shallow } from "immer";
import cx from "classnames";

function Section({ className, children, offset, ...props }) {
    const headerOffset = useStore((state) => state.headerOffset, shallow);
    const style = offset
        ? {
              paddingTop: `${headerOffset}px`,
          }
        : {};
    return (
        <section
            {...props}
            className={cx(styles.wrapper, "-exp--3", className && className)}
            style={style}
        >
            {children}
        </section>
    );
}

export default Section;
