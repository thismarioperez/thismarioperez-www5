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
    backgroundColor: PropTypes.shape({
        value: PropTypes.oneOf(Object.keys(colors)),
    }),
};

function Hero({ buttons, title, subtitle, content, backgroundColor, ...rest }) {
    return (
        <Section
            className={cx(`-bg--${backgroundColor.value}`, "-tall")}
            {...rest}
        >
            <div className="container">
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
                {buttons && buttons.length > 0 && (
                    <ContentWrapper className="-exp--t">
                        <Buttons buttons={buttons} />
                    </ContentWrapper>
                )}
            </div>
        </Section>
    );
}

Hero.propTypes = HeroPropTypes;

export default Hero;
