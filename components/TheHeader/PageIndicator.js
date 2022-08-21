import styles from "./PageIndicator.module.scss";

import { useRouter } from "next/router";
import cx from "classnames";

function PageIndicator() {
    const { asPath, isReady } = useRouter();

    return (
        <>
            {isReady && (
                <div className={cx(styles.wrapper, "-cursor--default")}>
                    <div
                        className={cx(
                            styles.inner,
                            "-color--light"
                        )}
                    >
                        <div className={styles.content}>{asPath}</div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PageIndicator;
