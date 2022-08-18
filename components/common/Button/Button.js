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
};

const Button = ({ className = "", color, children, as, ...rest }) => {
    const Component = as;
    return (
        <ConditionalWrapper
            condition={as === "a"}
            wrapper={(children) => <Link href={rest.href}>{children}</Link>}
        >
            <Component
                className={cx(styles.button, `-bg--${color}`, className)}
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
};

export default Button;
