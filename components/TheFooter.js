// lib
import { constants } from "@/scripts/core";

const { FRONTEND_GITHUB_URL, BACKEND_GITHUB_URL } = constants;

// components
import Container from "@/components/common/Container";

export default function Footer() {
    return (
        <footer className="-bg--secondary -exp">
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
        </footer>
    );
}
