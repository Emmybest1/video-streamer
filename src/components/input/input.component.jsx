import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, id, labelText, ...otherProps }) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            {type === "textarea" ? <textarea id={id} cols="5" rows="10" {...otherProps}></textarea> : <input type={type} id={id} {...otherProps} required />}
        </>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    otherProps: PropTypes.shape({
        onSubmit: PropTypes.func,
        onChange: PropTypes.func,
    }),
};

Input.defaultProps = {
    type: "text",
};

export default Input;
