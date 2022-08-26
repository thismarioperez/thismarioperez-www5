// styles
import styles from "./TheHeader.module.scss";

// lib
import dynamic from "next/dynamic";
import useStore from "@/store";
import { useEffect, useState } from "react";
import cx from "classnames";
import useDimensions from "@/hooks/useDimensions";
import useWindowScrollPosition from "@/hooks/useWindowScrollPosition";

// components
import Alert from "@/components/TheHeader/Alert";
import Container from "../common/Container";
import Logo from "@/components/TheHeader/Logo";
import LogoMark from "@/components/TheHeader/LogoMark";
import Link from "next/link";

const ScrollIndicator = dynamic(
    () => import("@/components/TheHeader/ScrollIndicator"),
    {
        ssr: false,
    }
);

function TheHeader() {
    const { headerOffset, setHeaderOffset = () => {} } = useStore(
        ({ global: { headerOffset, setHeaderOffset } }) => ({
            headerOffset,
            setHeaderOffset,
        })
    );
    const { y } = useWindowScrollPosition();
    const [ref, { height }] = useDimensions();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (height) {
            setHeaderOffset(Math.floor(height));
        }
    }, [height, setHeaderOffset]);

    useEffect(() => {
        setIsScrolled(y > headerOffset);
    }, [y, headerOffset]);

    return (
        <header
            className={cx(styles.wrapper, isScrolled && styles.wrapperScrolled)}
            ref={ref}
        >
            <Alert />
            <Container
                className={cx(
                    styles.inner,
                    isScrolled && styles.innerScrolled
                    // styles.branding
                )}
            >
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
                    <div className={styles.innerRightContent}></div>
                </div>
                <ScrollIndicator />
            </Container>
        </header>
    );
}

export default TheHeader;
