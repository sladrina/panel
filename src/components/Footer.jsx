import React from 'react';

const Footer = ({ text }) => (
    <div className="footer">
        <div className="footer-copyrights">
            <small className="text">&copy;&#32;{text}</small>
        </div>
    </div>
);

export default Footer;
