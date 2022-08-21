// styles
import styles from "./TheHeader.module.scss";

// lib
import dynamic from "next/dynamic";
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

const PageIndicator = dynamic(
    () => import("@/components/TheHeader/PageIndicator"),
    {
        ssr: false,
    }
);

function TheHeader() {
    const { setHeaderOffset = () => {} } = useStore(
        ({ global: { setHeaderOffset } }) => ({
            setHeaderOffset,
        })
    );
    const direction = useWindowScrollDirection();
    const [ref, { height }] = useDimensions();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (height) {
            setHeaderOffset(Math.floor(height));
        }
    }, [height]);

    useEffect(() => {
        setIsScrolled(direction === DIRECTIONS.DOWN);
    }, [direction]);

    return (
        <header
            className={styles.wrapper}
            ref={ref}
        >
            <Alert />
            <div className={cx(styles.inner, styles.branding)}>
                <div className={cx(styles.innerLeft)}>
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
                <div className={styles.innerRight}>
                    <div className={styles.innerRightContent}>
                        <PageIndicator />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TheHeader;
