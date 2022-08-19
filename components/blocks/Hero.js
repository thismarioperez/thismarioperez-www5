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
                    <ContentWrapper>
                        <div className="-exp--b">
                            <h3>{subtitle}</h3>
                        </div>
                    </ContentWrapper>
                )}
                {title && (
                    <ContentWrapper className="-exp--b">
                        <h1>{title}</h1>
                    </ContentWrapper>
                )}
                {content && (
                    <ContentWrapper>
                        <div className="-exp--b">
                            <MarkdownRenderer>{content}</MarkdownRenderer>
                        </div>
                    </ContentWrapper>
                )}
                {buttons && buttons.length > 0 && (
                    <ContentWrapper>
                        <Buttons buttons={buttons} />
                    </ContentWrapper>
                )}
            </div>
        </Section>
    );
}

Hero.propTypes = HeroPropTypes;

export default Hero;