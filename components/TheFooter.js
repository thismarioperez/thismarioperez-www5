// components
import Contact from "@/components/common/Contact";
import Container from "@/components/common/Container";
import ContentBlock from "@/components/common/ContentBlock";

export default function Footer() {
    return (
        <footer className="-bg--dark -exp--3">
            <Container>
                <ContentBlock>
                    <h2>Get in touch:</h2>
                </ContentBlock>
                <Contact />
            </Container>
            <Container className="-exp--2">
                <ContentBlock>
                    <h3 className="">
                        Built with Next.JS and Headless Wordpress.
                    </h3>
                </ContentBlock>
                <ContentBlock>
                    <p>
                        <a
                            href={`https://github.com/thismarioperez/thismarioperez-www4`}
                            className=""
                        >
                            View on GitHub
                        </a>
                    </p>
                </ContentBlock>
            </Container>
        </footer>
    );
}
