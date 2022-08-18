import { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const ButtonPropTypes = {
    children: PropTypes.any,
    as: PropTypes.elementType,
};

const Button = forwardRef(
    ({ className = "", children, as = "button", ...props }) => {
        const Component = as;
        return (
            <Component className={cx(className)} {...props}>
                {children}
            </Component>
        );
    }
);

Button.displayName = "Button";
Button.propTypes = ButtonPropTypes;

export default Button;
