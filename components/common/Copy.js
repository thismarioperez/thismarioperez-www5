// lib
import cx from "classnames";

export default function Copy({ children, className }) {
    return (
        <div className={cx("copy", className && className)}>
            {children}
        </div>
    );
}
