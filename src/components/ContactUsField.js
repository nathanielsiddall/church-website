import React, { useState, useEffect } from 'react';

const ContactUsField = () => {
    // State to track if the screen is mobile-sized
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        // Handler to update state on window resize
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FBFBFC',
        color: '#334F8F',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '15vh 5vw',
    };

    const titleStyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '40px',
    };

    const contactDetailsStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '800px',
    };

    const contactItemStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        marginBottom: '20px',
        textAlign: isMobile ? 'center' : 'left',
    };

    const iconStyle = {
        fontSize: '2em',
        color: '#334F8F',
        marginRight: isMobile ? '0' : '15px',
        marginBottom: isMobile ? '10px' : '0',
    };

    const infoStyle = {
        fontSize: '1.5rem',
        color: '#334F8F',
        wordBreak: 'break-word',
    };

    const linkStyle = {
        color: '#334F8F',
        textDecoration: 'none',
    };

    return (
        <div style={pageStyle}>
            <h1 style={titleStyle}>Contact Us</h1>
            <div style={contactDetailsStyle}>
                {/* Phone */}
                <div style={contactItemStyle}>
                    <i className="pi pi-phone" style={iconStyle}></i>
                    <div style={infoStyle}>
                        <a href="tel:(903)756-7428" style={linkStyle}>
                            (903) 756-7428
                        </a>
                    </div>
                </div>
                {/* Address */}
                <div style={contactItemStyle}>
                    <i className="pi pi-map-marker" style={iconStyle}></i>
                    <div style={infoStyle}>
                        P.O. Box 1002<br />
                        Linden, TX 75563
                    </div>
                </div>
                {/* Email */}
                <div style={contactItemStyle}>
                    <i className="pi pi-envelope" style={iconStyle}></i>
                    <div style={infoStyle}>
                        <a
                            href="mailto:pinecrestbaptist1953@gmail.com"
                            style={linkStyle}
                        >
                            pinecrestbaptist1953@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsField;
