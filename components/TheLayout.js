// lib
import { useEffect, useRef } from "react";
import useStore from "@/store";
import { gsap } from "@/lib/gsap";
import { useRouter } from "next/router";
import { constants } from "@/scripts/core";
import dynamic from "next/dynamic";

// components
import Meta from "@/components/common/Meta";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import TheMenuButton from "@/components/TheMenuButton";
import TheMenu from "@/components/TheMenu";
import TheLoader from "@/components/TheLoader";
const ThePageIndicator = dynamic(
    () => import("@/components/ThePageIndicator"),
    { ssr: false }
);

const { SITE_NAME } = constants;

export default function Layout({ children }) {
    const router = useRouter();
    const contentRef = useRef();
    const { headerOffset } = useStore((state) => ({
        headerOffset: state.header.offset,
    }));

    useEffect(() => {
        const handleLinkClick = (e) => {
            const { target } = e;
            if (/^#/.test(target.hash)) {
                e.preventDefault();
                core.log("log", "Scroll to", {
                    href: target.href,
                    pathname: router.pathname,
                });
                gsap.to(window, {
                    duration: 1,
                    ease: "power2.inOut",
                    scrollTo: {
                        y: target.hash,
                        offsetY: headerOffset,
                        autoKill: true,
                    },
                });
            }
        };
        document.querySelectorAll("a").forEach((el) => {
            el.addEventListener("click", handleLinkClick);
        });
        return () => {
            document.querySelectorAll("a").forEach((el) => {
                el.removeEventListener("click", handleLinkClick);
            });
        };
    }, [headerOffset, router.pathname]);

    return (
        <>
            <Meta>
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="/favicon/favicon.svg"
                />
                <link rel="icon" type="image/png" href="/favicon/favicon.png" />
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    href="/feed.xml"
                />
                <meta name="description" content={`${SITE_NAME}`} />
            </Meta>
            <TheHeader />
            <main className="-tall" ref={contentRef}>
                {children}
            </main>
            <TheFooter />
            <ThePageIndicator />
            <TheMenuButton />
            <TheMenu />
            <TheLoader />
        </>
    );
}
