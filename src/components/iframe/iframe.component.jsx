import React from "react";
import PropTypes from "prop-types";

import "./iframe.style.scss";

const Iframe = ({ src, title, width, height, ...otherProps }) => {
    return (
        <iframe
            src={src}
            width={width}
            height={height}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            fallowfullscreen="true"
            {...otherProps}
        ></iframe>
    );
};

Iframe.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    otherProps: PropTypes.bool,
};

Iframe.defaultProps = {
    width: "80%",
    height: "500px",
};

export default Iframe;
