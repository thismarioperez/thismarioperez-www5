// lib
import { constants } from "@/scripts/core";

const { GITHUB_URL } = constants;

// components
import Contact from "@/components/common/Contact";
import Container from "@/components/common/Container";
import ContentWrapper from "@/components/common/ContentWrapper";

export default function Footer() {
    return (
        <footer className="-bg--secondary -exp--3">
            <Container>
                <ContentWrapper>
                    <h2>Get in touch:</h2>
                </ContentWrapper>
                <Contact />
            </Container>
            <Container className="-exp--2">
                <ContentWrapper>
                    <h3 className="">
                        Built with Next.JS and Strapi.
                    </h3>
                </ContentWrapper>
                <ContentWrapper>
                    <p>
                        <a
                            href={GITHUB_URL}
                            className=""
                        >
                            View on GitHub
                        </a>
                    </p>
                </ContentWrapper>
            </Container>
        </footer>
    );
}
