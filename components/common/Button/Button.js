import styles from "./Button.module.scss";
import colors from "@/styles/exports/theme.module.scss";
import { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const ButtonPropTypes = {
    children: PropTypes.any,
    as: PropTypes.elementType,
    color: PropTypes.oneOf(Object.keys(colors)),
};

const Button = forwardRef(
    ({ className = "", color, children, as, ...props }) => {
        const Component = as;
        return (
            <Component
                className={cx(
                    styles.button,
                    styles[`button--${color}`],
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Button.displayName = "Button";
Button.propTypes = ButtonPropTypes;
Button.defaultProps = {
    as: "button",
    color: "primary",
};

export default Button;
