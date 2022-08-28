// style
import styles from "./TheFooter.module.scss";

// lib
import { constants } from "@/scripts/core";

const { FRONTEND_GITHUB_URL, BACKEND_GITHUB_URL } = constants;

// components
import Container from "@/components/common/Container";
import Contact from "@/components/common/Contact";
import Social from "@/components/common/Social";
import Logo from "../TheHeader/Logo";

export default function Footer() {
    return (
        <footer>
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
            <div className="-bg--dark -exp">
                <Container>
                    <h3>
                        Built with{" "}
                        <a
                            href={FRONTEND_GITHUB_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Next.JS
                        </a>{" "}
                        and{" "}
                        <a
                            href={BACKEND_GITHUB_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Strapi
                        </a>
                        .
                    </h3>
                </Container>
            </div>
        </footer>
    );
}
