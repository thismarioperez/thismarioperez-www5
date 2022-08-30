// styles
import styles from "./Content.module.scss";

// lib
import cx from "classnames";

function Content({ children, className, ...rest }) {
    return (
        <div className={cx("js-content", styles.wrapper, className)} {...rest}>
            <div className=" -tall">
                <div className="js-container container -exp">{children}</div>
            </div>
        </div>
    );
}

export default Content;
