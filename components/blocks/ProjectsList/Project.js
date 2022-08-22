// styles
import styles from "./Project.module.scss";

// lib
import PropTypes from "prop-types";
import cx from "classnames";

// components
import Section from "@/components/common/Section";
import ContentWrapper from "@/components/common/ContentWrapper";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";
import Container from "@/components/common/Container";
import Link from "next/link";

const ProjectPropTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string,
            label: PropTypes.string,
            target: PropTypes.string,
        })
    ),
};

function Project({ title = null, content = null, links = null }) {
    return (
        <Section className={styles.wrapper}>
            <Container>
                {title && (
                    <ContentWrapper
                        className={cx(
                            (content?.length || links?.length) && "-exp--b"
                        )}
                    >
                        <h2>{title}</h2>
                    </ContentWrapper>
                )}
                {content && (
                    <ContentWrapper className={cx(links?.length && "-exp--b")}>
                        <MarkdownRenderer>{content}</MarkdownRenderer>
                    </ContentWrapper>
                )}
                {links && (
                    <ContentWrapper>
                        <h3>Links:</h3>
                        {links.map(({ href, label, target }, i) => (
                            <p key={i}>
                                <a href={href} target={target} rel="noreferrer">
                                    {label}
                                    {" →"}
                                </a>
                            </p>
                        ))}
                    </ContentWrapper>
                )}
            </Container>
        </Section>
    );
}

Project.propTypes = ProjectPropTypes;
Project.defaultProps = {
    title: "",
    content: "",
    links: [],
};

export default Project;
