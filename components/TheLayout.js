// lib
import { useEffect, useRef } from "react";
import useStore from "@/store";
import { gsap } from "@/lib/gsap";
import { useRouter } from "next/router";
import { log } from "@/scripts/core";

// components
import Meta from "@/components/common/Meta";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default function Layout({ children }) {
    const router = useRouter();
    const contentRef = useRef();
    const { headerOffset } = useStore(({ global: { headerOffset } }) => ({
        headerOffset,
    }));

    useEffect(() => {
        const handleLinkClick = (e) => {
            const { target } = e;
            if (/^#/.test(target.hash)) {
                e.preventDefault();
                core.log('log', 'Scroll to', { href: target.href, pathname: router.pathname });
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
            <Meta />
            <TheHeader />
            <main ref={contentRef}>
                <div className="-tall">{children}</div>
            </main>
            <TheFooter />
        </>
    );
}
