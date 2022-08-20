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
import Alert from "@/components/TheHeader/Alert";
import Logo from "@/components/TheHeader/Logo";
import LogoMark from "@/components/TheHeader/LogoMark";
import Link from "next/link";
import PageIndicator from "@/components/TheHeader/PageIndicator";

function PinnedHeader() {
    const { setHeaderOffset = () => {} } = useStore(({ setHeaderOffset }) => ({
        setHeaderOffset,
    }));
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
            <div className={cx(styles.inner, "-exp--1/2")}>
                <div className={styles.innerLeft}>
                    <div className={styles.branding}>
                        <Link href="/">
                            <a>
                                <div
                                    className={cx(
                                        styles.logo,
                                        isScrolled && styles.logoScrolled
                                    )}
                                >
                                    <Logo />
                                    <LogoMark />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.innerRight}>
                    <div className={styles.innerRightContent}>
                        <PageIndicator />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default PinnedHeader;
