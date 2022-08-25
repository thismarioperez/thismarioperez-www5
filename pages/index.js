// lib
import { getHomePage } from "@/lib/api";
import { log } from "@/scripts/core";
import { constants } from "@/scripts/core";
import cx from "classnames";

// components
import Meta from "@/components/common/Meta";
import TheHomeScene from "@/components/TheHomeScene";
import Section from "@/components/common/Section";
import ContentWrapper from "@/components/common/ContentWrapper";
import Buttons from "@/components/common/Buttons";
import Container from "@/components/common/Container";
import Copy from "@/components/common/Copy";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";

export default function Home({ data }) {
    log("log", "Home Page Data:", data);
    const {
        attributes: { title, header, content, subheader, buttons },
    } = data;
    return (
        <>
            <Meta>
                <title>{`${constants.SITE_NAME} | ${title}`}</title>
            </Meta>
            <Section className="-tall">
                <Container>
                    <div className="-relative -z--2">
                        {header?.length > 0 && (
                            <ContentWrapper
                                className={cx(
                                    (subheader?.length ||
                                        content?.length ||
                                        buttons?.length) &&
                                        "-exp--b--1/2"
                                )}
                            >
                                <h1>{header}</h1>
                            </ContentWrapper>
                        )}
                        {subheader?.length > 0 && (
                            <ContentWrapper
                                className={cx(
                                    (content?.length || buttons?.length) &&
                                        "-exp--b"
                                )}
                            >
                                <h3>{subheader}</h3>
                            </ContentWrapper>
                        )}
                        {content?.length > 0 && (
                            <ContentWrapper
                                className={cx(buttons?.length && "-exp--b")}
                            >
                                <MarkdownRenderer>{content}</MarkdownRenderer>
                            </ContentWrapper>
                        )}
                        {buttons?.length > 0 && (
                            <ContentWrapper>
                                <Buttons buttons={buttons} />
                            </ContentWrapper>
                        )}
                    </div>
                </Container>
            </Section>
            <TheHomeScene text="M" />
        </>
    );
}

export async function getServerSideProps() {
    const { homePage } = await getHomePage();

    return {
        props: {
            data: homePage?.data ?? {},
        },
    };
}
