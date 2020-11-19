import React from "react";
import PropTypes from "prop-types";

import "./button.style.scss";

const Button = ({ children, className, buttonText, ...otherProps }) => {
    return (
        <button className={className} {...otherProps}>
            {buttonText}
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
};

export default Button;
