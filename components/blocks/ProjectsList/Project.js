// styles
import styles from "./Project.module.scss";

// lib
import PropTypes from "prop-types";
import cx from "classnames";

// components
import Section from "@/components/common/Section";
import ContentWrapper from "@/components/common/ContentWrapper";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";
import Copy from "@/components/common/Copy";
import Container from "@/components/common/Container";
import Image from "next/image";

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
    image: PropTypes.shape({
        data: PropTypes.object,
    }),
};

function Project({ title = null, content = null, links = null, image = null }) {
    return (
        <Section className={styles.wrapper}>
            <Container className={styles.container}>
                <div className={styles.content}>
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
                        <ContentWrapper
                            className={cx(links?.length && "-exp--b")}
                        >
                            <MarkdownRenderer>{content}</MarkdownRenderer>
                        </ContentWrapper>
                    )}
                    {links && (
                        <ContentWrapper>
                            <div className={styles.linksWrapper}>
                                <h3>Links:</h3>
                                {links.map(({ href, label, target }, i) => (
                                    <p key={i}>
                                        <a
                                            href={href}
                                            target={target}
                                            rel="noreferrer"
                                        >
                                            {label}
                                            {" →"}
                                        </a>
                                    </p>
                                ))}
                            </div>
                        </ContentWrapper>
                    )}
                </div>
                <div className={styles.imageWrapper}>
                    {image && image.data && image.data.attributes && (
                        <ContentWrapper>
                            <div className={styles.image}>
                                <Image
                                    layout="responsive"
                                    src={image.data.attributes.url}
                                    alt={image.data.attributes.alternativeText}
                                    placeholder="blur"
                                    blurDataURL={
                                        image.data.attributes.formats.thumbnail
                                            .url
                                    }
                                    height={image.data.attributes.height}
                                    width={image.data.attributes.width}
                                />
                            </div>
                        </ContentWrapper>
                    )}
                </div>
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
