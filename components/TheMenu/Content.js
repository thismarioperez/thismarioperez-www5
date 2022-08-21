// styles
import styles from "./Content.module.scss";

// lib
import cx from "classnames";

function Content({ className, ...rest }) {
    return (
        <div className={cx("js-content", styles.wrapper, className)} {...rest}>
            <div className=" -tall">
                <div className="js-container container -exp">
                    <h1 className="-color--dark">I{"'"}m some content</h1>
                </div>
            </div>
        </div>
    );
}

export default Content;
