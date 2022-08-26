// style
import styles from "@/styles/home.module.scss";

// lib
import { getHomePage } from "@/lib/api";
import { log } from "@/scripts/core";
import { constants } from "@/scripts/core";
import cx from "classnames";
import useBreakpoints from "@/hooks/useBreakpoints";

// components
import Meta from "@/components/common/Meta";
import TheHomeScene from "@/components/TheHomeScene";
import Section from "@/components/common/Section";
import ContentWrapper from "@/components/common/ContentWrapper";
import Buttons from "@/components/common/Buttons";
import Container from "@/components/common/Container";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";

export default function Home({ data }) {
    log("log", "Home Page Data:", data);
    const { medium } = useBreakpoints();
    const {
        attributes: { title, header, content, subheader, buttons },
    } = data;
    return (
        <>
            <Meta>
                <title>{`${constants.SITE_NAME} | ${title}`}</title>
            </Meta>
            <Section
                className={cx(
                    "-tall",
                    styles.section,
                    medium && styles.sectionMd
                )}
            >
                <Container>
                    <div className={styles.content}>
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
