// lib
import { useEffect, useRef } from "react";
import { getGlobalData } from "@/lib/api";
import useStore from "@/store";
import { gsap } from "@/lib/gsap";
import { useRouter } from "next/router";

// components
import TheFooter from "@/components/TheFooter";
import Meta from "@/components/common/Meta";
import TheHeader from "@/components/TheHeader";

export default function Layout({ preview, children }) {
    const router = useRouter();
    const contentRef = useRef();
    const { headerOffset, setContact, setSocial } = useStore(
        ({ headerOffset, setContact, setSocial }) => ({
            headerOffset,
            setContact,
            setSocial,
        })
    );
    useEffect(async () => {
        const data = await getGlobalData();
        const { contact, social } = data;
        setContact(contact);
        setSocial(social);
    }, []);

    useEffect(() => {
        const handleLinkClick = (e) => {
            const { target } = e;
            console.log({ href: target.href, pathname: router.pathname });
            if (/^#/.test(target.hash)) {
                e.preventDefault();
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
