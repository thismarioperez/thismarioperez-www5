// style
import styles from "./TheFooter.module.scss";

// lib
import { constants } from "@/scripts/core";
import cx from "classnames";

const { FRONTEND_GITHUB_URL, BACKEND_GITHUB_URL } = constants;

// components
import Container from "@/components/common/Container";
import Contact from "@/components/common/Contact";
import Social from "@/components/common/Social";
import Logo from "../TheHeader/Logo";

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className="-bg--secondary -exp">
                <Container>
                    <div className={styles.grid}>
                        <div className={styles.gridItem}>
                            <Logo className={styles.logo} />
                        </div>
                        <div className={styles.gridItem}>
                            <Contact />
                        </div>
                        <div className={styles.gridItem}>
                            <Social />
                        </div>
                    </div>
                </Container>
            </div>
            <div className={cx(styles.bottom, "-bg--dark")}>
                <Container>
                    <p>
                        View source:{"  "}
                        <a
                            href={FRONTEND_GITHUB_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Frontend
                        </a>{" "}
                        |{" "}
                        <a
                            href={BACKEND_GITHUB_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Backend
                        </a>
                        .
                    </p>
                </Container>
            </div>
        </footer>
    );
}
