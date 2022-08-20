import styles from "./TheMenuButton.module.scss";

import cx from "classnames";

function TheMenuButton() {
    return (
        <div className={styles.wrapper}>
            <button
                type="button"
                className={cx("button--primary", styles.button)}
            >
                <div className={styles.icon}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </button>
        </div>
    );
}

export default TheMenuButton;
