import styles from "./Button.module.scss";
import colors from "@/styles/exports/colors.module.scss";

import PropTypes from "prop-types";
import cx from "classnames";

import Link from "next/link";
import ConditionalWrapper from "../ConditionalWrapper";

const ButtonPropTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    as: PropTypes.elementType,
    color: PropTypes.oneOf(Object.keys(colors)),
    type: PropTypes.oneOf(["default", "thin", "empty"]),
    round: PropTypes.oneOf([true, false]),
};

const Button = ({ as, className, color, children, round, type, ...rest }) => {
    const Component = as;
    return (
        <ConditionalWrapper
            condition={as === "a"}
            wrapper={(children) => <Link href={rest.href}>{children}</Link>}
        >
            <Component
                className={cx(
                    styles.button,
                    `button--${type}`,
                    `button--${color}`,
                    round && "button--radius",
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
};

export default Button;
