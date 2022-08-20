// styles
import styles from "./TheMenuButton.module.scss";

// lib
import cx from "classnames";
import useStore from "@/store";
import { shallow } from "immer";

function TheMenuButton() {
    const { openMenu, closeMenu, isMenuOpen } = useStore(
        (state) => ({
            openMenu: state.global.openMenu,
            closeMenu: state.global.closeMenu,
            isMenuOpen: state.global.isMenuOpen,
        }),
        shallow
    );

    const onClick = () => {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    return (
        <div className={styles.wrapper}>
            <button
                type="button"
                className={cx("button--primary", styles.button)}
                onClick={onClick}
            >
                <div
                    className={cx(styles.icon, isMenuOpen && styles.iconClose)}
                >
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </button>
        </div>
    );
}

export default TheMenuButton;
