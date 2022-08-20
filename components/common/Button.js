import colors from "@/styles/exports/colors.module.scss";

import PropTypes from "prop-types";
import cx from "classnames";

import Link from "next/link";
import ConditionalWrapper from "@/components/common/ConditionalWrapper";

const ButtonPropTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    as: PropTypes.elementType,
    color: PropTypes.oneOf(Object.keys(colors)),
    type: PropTypes.oneOf(["default", "thin", "empty"]),
    round: PropTypes.oneOf([true, false]),
    contained: PropTypes.oneOf([true, false]),
    hollow: PropTypes.oneOf([true, false]),
};

const Button = ({ as, className, children, color, contained, hollow, round, type, ...rest }) => {
    const Component = as;
    return (
        <ConditionalWrapper
            condition={as === "a"}
            wrapper={(children) => <Link href={rest.href}>{children}</Link>}
        >
            <Component
                className={cx(
                    `button`,
                    `button--${type}`,
                    !hollow && `button--${color}`,
                    hollow && `button--hollow--${color}`,
                    round && "button--radius",
                    contained && "button--contained",
                    className
                )}
                {...rest}
            >
                {children}
            </Component>
        </ConditionalWrapper>
    );
};

Button.displayName = "Button";
Button.propTypes = ButtonPropTypes;
Button.defaultProps = {
    as: "button",
    color: "primary",
    type: "default",
    round: true,
    contained: true,
    hollow: false,
};

export default Button;
