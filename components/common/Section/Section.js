// styles
import styles from "./Section.module.scss";

// lib
import PropTypes from "prop-types";
import useStore from "@/store";
import shallow from 'zustand/shallow';
import cx from "classnames";

const SectionPropTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    offset: PropTypes.bool,
    alignment: PropTypes.oneOf(["left", "center", "right"]),
};

function Section({ alignment, className, children, offset, ...props }) {
    const headerOffset = useStore(
        ({ global: { headerOffset } }) => headerOffset,
        shallow
    );
    const style = offset
        ? {
              paddingTop: `${headerOffset}px`,
          }
        : {};
    return (
        <section
            {...props}
            className={cx(
                styles.wrapper,
                styles[`wrapper--${alignment}`],
                "-exp--3",
                className
            )}
            style={style}
        >
            {children}
        </section>
    );
}

Section.propTypes = SectionPropTypes;
Section.defaultProps = {
    offset: false,
    alignment: "left",
};

export default Section;
