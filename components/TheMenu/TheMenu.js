// styles
import styles from "./TheMenu.module.scss";
import durations from "@/styles/exports/durations.module.scss";

// lib
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import useStore from "@/store";
import { shallow } from "immer";
import cx from "classnames";

// components
import Background from "@/components/TheMenu/Background";
import Content from "@/components/TheMenu/Content";
import Nav from "@/components/TheMenu/Nav";

function TheMenu() {
    const { isOpen } = useStore(
        (state) => ({
            isOpen: state.global.isMenuOpen,
        }),
        shallow
    );
    const el = useRef(null);
    const q = gsap.utils.selector(el);
    const tl = useRef(null);

    useEffect(() => {
        tl.current = gsap
            .timeline({
                paused: true,
            })
            .fromTo(
                el.current,
                {
                    zIndex: -1,
                },
                {
                    zIndex: 900,
                    duration: 0.01,
                }
            )
            .fromTo(
                q(".js-bg"),
                {
                    x: "100%",
                    y: "100%",
                },
                {
                    x: "0%",
                    y: "0%",
                    ease: "linear",
                    duration: durations["1"] * 0.001,
                }
            )
            .fromTo(
                q(".js-content .js-item"),
                {
                    alpha: 0,
                    y: 20,
                },
                {
                    alpha: 1,
                    y: 0,
                    ease: "linear",
                    duration: durations["1"] * 0.001,
                    stagger: durations["1"] * 0.001 * 0.8,
                },
                ">+=0.1"
            );

        return () => {
            tl.current.kill();
        };
    }, []);

    useEffect(() => {
        if (!tl.current) {
            return;
        }
        if (isOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isOpen]);

    return (
        <div className={cx(styles.wrapper)} ref={el}>
            <Background />
            <Content>
                <Nav />
            </Content>
        </div>
    );
}

export default TheMenu;
