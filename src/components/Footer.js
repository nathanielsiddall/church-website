import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerStyle = {
        background: '#8E949E',
        color: '#FBFBFC',
        padding: '20px',
        textAlign: 'center',
        zIndex: '2540'
    };

    const footerContentStyle = {
        padding: '1vh',
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const iconStyle = {
        margin: '10px',
        fontSize: '24px',
        color: '#FBFBFC',
    };

    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100066430396333" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                        <FaFacebook />
                    </a>
                    <a href="https://www.youtube.com/@pinecrestbaptistchurchlind5513" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                        <FaYoutube />
                    </a>
                </div>
                <p>© {currentYear} Pinecrest Baptist Church. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
