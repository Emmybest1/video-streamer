import React from "react";
import PropTypes from "prop-types";

import "./image.style.scss";

const Image = ({ src, alt }) => {
    return <img src={src} alt={alt} />;
};

export default Image;

Image.propTypes = {
    src: PropTypes.string.isRequired,
};

Image.defaultProps = {
    alt: "",
};
