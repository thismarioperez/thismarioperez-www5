// styles
import styles from "./PinnedHeader.module.scss";

// lib
import useStore from "@/store";
import { useEffect, useState } from "react";
import cx from "classnames";
import useDimensions from "@/hooks/useDimensions";
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
    const [ref, { height }] = useDimensions();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setHeaderOffset(Math.floor(height));
    }, [height]);

    useEffect(() => {
        setIsScrolled(direction === DIRECTIONS.DOWN);
    }, [direction]);

    return (
        <header className={styles.wrapper} ref={ref}>
            <Alert />
            <div className={cx(styles.inner, '-exp--1/2')} >
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
