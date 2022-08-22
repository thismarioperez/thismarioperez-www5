import colors from "@/styles/exports/colors.module.scss";

// lib
import cx from "classnames";
import PropTypes from "prop-types";

// components
import Buttons from "@/components/common/Buttons";
import ContentWrapper from "@/components/common/ContentWrapper";
import Section from "@/components/common/Section";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";

const HeroPropTypes = {
    buttons: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string })),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string,
    tall: PropTypes.bool,
    heroBackgroundColor: PropTypes.oneOf(Object.keys(colors)),
};

function Hero({
    buttons = null,
    title = null,
    subtitle = null,
    content = null,
    heroBackgroundColor,
    tall = null,
    ...rest
}) {
    return (
        <Section
            className={cx(`-bg--${heroBackgroundColor}`, tall && "-tall")}
            {...rest}
        >
            <div className="container -exp--t--3">
                {subtitle && (
                    <ContentWrapper
                        className={cx(
                            title?.length ||
                                content?.length ||
                                (buttons?.length && "-exp--b--1/2")
                        )}
                    >
                        <h3>{subtitle}</h3>
                    </ContentWrapper>
                )}
                {title && (
                    <ContentWrapper
                        className={cx(
                            content?.length || (buttons?.length && "-exp--b")
                        )}
                    >
                        <h1>{title}</h1>
                    </ContentWrapper>
                )}
                {content && (
                    <ContentWrapper
                        className={cx(buttons?.length && "-exp--b")}
                    >
                        <MarkdownRenderer>{content}</MarkdownRenderer>
                    </ContentWrapper>
                )}
                {buttons && (
                    <ContentWrapper>
                        <Buttons buttons={buttons} />
                    </ContentWrapper>
                )}
            </div>
        </Section>
    );
}

Hero.propTypes = HeroPropTypes;
Hero.defaultProps = {
    heroBackgroundColor: "dark",
};

export default Hero;
