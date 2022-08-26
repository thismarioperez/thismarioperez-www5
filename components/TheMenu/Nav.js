// style
import styles from "./Nav.module.scss";

// lib
import useStore from "@/store";
import { useRouter } from "next/router";
import shallow from 'zustand/shallow';
import cx from "classnames";

// components
import Link from "next/link";

function NavLink({ href = "", target = undefined, label = "" }) {
    const { asPath } = useRouter();
    const { closeMenu } = useStore((state) => ({
        closeMenu: state.global.closeMenu,
    }));

    const onClick = () => {
        closeMenu();
    };

    return (
        <Link href={href}>
            <a
                className={cx(
                    styles.link,
                    asPath === href && styles.linkActive
                )}
                target={target}
                onClick={onClick}
            >
                <span className={styles.linkText}>{label}</span>
            </a>
        </Link>
    );
}

function Nav() {
    const { items } = useStore((state) => {
        const { data = [] } = state.navigations;
        const nav = data.filter((nav) => nav.attributes.slug === "main");
        const items = nav[0]?.attributes?.items ?? [];
        return {
            items,
        };
    }, shallow);

    return (
        <nav>
            <ul>
                {items.map((item, i) => (
                    <li key={i} className={cx("js-item")}>
                        <NavLink {...item} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
