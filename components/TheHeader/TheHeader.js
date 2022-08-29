// styles
import styles from "./TheHeader.module.scss";
import durations from "@/styles/exports/durations.module.scss";

// lib
import dynamic from "next/dynamic";
import useStore from "@/store";
import { useEffect, useRef, useState } from "react";
import cx from "classnames";
import useDimensions from "@/hooks/useDimensions";
import useWindowScrollPosition from "@/hooks/useWindowScrollPosition";
import { gsap } from "@/lib/gsap";

// components
import Alert from "@/components/TheHeader/Alert";
import Container from "../common/Container";
import Logo from "@/components/TheHeader/Logo";
import LogoMark from "@/components/TheHeader/LogoMark";
import Link from "next/link";
import CmsLink from "@/components/common/CmsLink";

const ScrollIndicator = dynamic(
    () => import("@/components/TheHeader/ScrollIndicator"),
    {
        ssr: false,
    }
);

function TheHeader() {
    const {
        navigations,
        headerOffset,
        setHeaderOffset = () => {},
    } = useStore((state) => ({
        headerOffset: state.header.offset,
        navigations: state.navigations,
        setHeaderOffset: state.header.setOffset,
    }));
    const { data = [] } = navigations;
    const header = data.filter((nav) => nav.attributes.slug === "header");
    const links = header[0]?.attributes?.items ?? [];
    const { y } = useWindowScrollPosition();
    const [ref, { height }] = useDimensions();
    const logoRef = useRef(null);
    const markRef = useRef(null);
    const timeline = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (height) {
            setHeaderOffset(Math.floor(height));
        }
    }, [height, setHeaderOffset]);

    useEffect(() => {
        setIsScrolled(y > headerOffset);
    }, [y, headerOffset]);

    useEffect(() => {
        if (timeline.current) {
            if (isScrolled) {
                timeline.current.play();
            } else {
                timeline.current.reverse();
            }
        }
    }, [isScrolled]);

    useEffect(() => {
        // setup logo swap animation
        if (logoRef.current && markRef.current) {
            timeline.current = gsap.timeline({ paused: true });
            timeline.current.fromTo(
                logoRef.current,
                {
                    alpha: 1,
                    xPercent: 0,
                },
                {
                    alpha: 0,
                    xPercent: -100,
                    ease: "ease",
                    duration: parseInt(durations["1"]) * 0.001,
                }
            );
            timeline.current.fromTo(
                markRef.current,
                {
                    alpha: 0,
                    xPercent: -100,
                },
                {
                    alpha: 1,
                    xPercent: 100,
                    ease: "ease",
                    duration: parseInt(durations["1"]) * 0.001,
                },
                "<100%"
            );
        }
        return () => {
            if (timeline.current) {
                timeline.current.kill();
                timeline.current = null;
            }
        };
    }, []);

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
                                <Logo ref={logoRef} />
                                <LogoMark ref={markRef} />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.innerRight}>
                    <div className={styles.innerRightContent}>
                        {links.map((cta, i) => (
                            <p key={i}>
                                <CmsLink {...cta}>
                                    {cta.label}
                                    {" →"}
                                </CmsLink>
                            </p>
                        ))}
                    </div>
                </div>
                <ScrollIndicator />
            </Container>
        </header>
    );
}

export default TheHeader;
