// styles
import styles from "./PinnedHeader.module.scss";

// lib
import useStore from "@/store";
import { useEffect, useState, useRef } from "react";
import cx from "classnames";
import useRefDimensions from "@/hooks/useRefDimensions";
import useWindowScrollDirection, {
    DIRECTIONS,
} from "@/hooks/useWindowScrollDirection";

// components
import Alert from "./Alert";
import Logo from "./Logo";
import LogoMark from "./LogoMark";
import Link from "next/link";

function PinnedHeader() {
    const { setHeaderOffset = () => {} } = useStore(
        ({ setHeaderOffset }) => ({
            setHeaderOffset,
        })
    );
    const direction = useWindowScrollDirection();
    const ref = useRef();
    const { height = 0 } = useRefDimensions(ref);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setHeaderOffset(height);
    }, [height]);

    useEffect(() => {
        setIsScrolled(direction === DIRECTIONS.DOWN);
    }, [direction]);

    return (
        <header ref={ref} className={styles.wrapper}>
            <Alert />
            <div className={cx(styles.inner)}>
                <div className={styles.branding}>
                    <Link href="/">
                        <a>
                            <div
                                className={cx(
                                    styles.logo,
                                    isScrolled && styles["logo--scrolled"]
                                )}
                            >
                                <Logo />
                                <LogoMark />
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default PinnedHeader;
