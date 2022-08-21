// styles
import styles from "./Background.module.scss";

// lib
import cx from "classnames";

const Background = ({ className, ...rest }) => (
    <div
        className={cx("js-bg", styles.wrapper, "-bg--primary", className)}
        {...rest}
    ></div>
);

export default Background;
