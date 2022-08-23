import colors from "@/styles/exports/colors.module.scss";

// lib
import cx from "classnames";
import PropTypes from "prop-types";

// components
import Container from "../common/Container";
import Copy from "../common/Copy";
import ContentWrapper from "@/components/common/ContentWrapper";
import Section from "@/components/common/Section";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";

const InteriorPropTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string,
    interiorBackgroundColor: PropTypes.oneOf(Object.keys(colors)),
};

function Interior({
    buttons,
    title,
    subtitle,
    content,
    interiorBackgroundColor,
    tall,
    ...rest
}) {
    return (
        <Section className={cx(`-bg--${interiorBackgroundColor}`)} {...rest}>
            <Container>
                <Copy>
                    {subtitle && (
                        <ContentWrapper className="-exp--b--1/2">
                            <h3>{subtitle}</h3>
                        </ContentWrapper>
                    )}
                    {title && (
                        <ContentWrapper>
                            <h1>{title}</h1>
                        </ContentWrapper>
                    )}
                    {content && (
                        <ContentWrapper className="-exp--t">
                            <MarkdownRenderer>{content}</MarkdownRenderer>
                        </ContentWrapper>
                    )}
                </Copy>
            </Container>
        </Section>
    );
}

Interior.propTypes = InteriorPropTypes;
Interior.defaultProps = {
    interiorBackgroundColor: "dark",
};

export default Interior;
