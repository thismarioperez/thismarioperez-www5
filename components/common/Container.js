// lib
import cx from "classnames";

export default function Container({ children, className }) {
    return (
        <div className={cx("container", className && className)}>
            {children}
        </div>
    );
}
