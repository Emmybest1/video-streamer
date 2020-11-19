import React from "react";

import "./footer.style.scss";

const Footer = () => {
    return (
        <footer className="container footer-container">
            <p>
                Copyright &copy; <time>{new Date().getFullYear()}</time>
            </p>
        </footer>
    );
};

export default Footer;
