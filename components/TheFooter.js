// lib
import { constants } from "@/scripts/core";

const { GITHUB_URL } = constants;

// components
import Contact from "@/components/common/Contact";
import Container from "@/components/common/Container";
import ContentWrapper from "@/components/common/ContentWrapper";
import Section from "./common/Section";

export default function Footer() {
    return (
        <footer className="-bg--secondary">
            <Section>
                <Container>
                    <ContentWrapper className="-exp--b">
                        <h2>Get in touch:</h2>
                        <Contact />
                    </ContentWrapper>
                    <ContentWrapper>
                        <h3>Built with Next.JS and Strapi.</h3>
                    </ContentWrapper>
                    <ContentWrapper>
                        <p>
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View on GitHub
                            </a>
                        </p>
                    </ContentWrapper>
                </Container>
            </Section>
        </footer>
    );
}
