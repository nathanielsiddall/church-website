import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'primeicons/primeicons.css';

const IndexCard = ({ label, icon, to, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const cardStyle = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '350px',
        margin: '1rem',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: isHovered ? '0 12px 24px rgba(0,0,0,0.2)' : '0 6px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        background: image ? `url(${image}) no-repeat center center / cover` : '#fff',
        color: image ? '#fff' : '#333',
        padding: '20px',
    };

    const headerStyle = {
        fontSize: '1.8rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
    };

    const copyStyle = {
        fontSize: '1rem',
        marginBottom: '1rem',
        padding: '0 1rem',
    };

    const iconStyle = {
        fontSize: '2.5rem',
        margin: '1rem 0',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
    };

    return (
        <Link to={to} style={linkStyle}>
            <div
                style={cardStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <i className={icon} style={iconStyle}></i>
                <div style={headerStyle}>{label}</div>
                <div style={copyStyle}>Some copy here</div>
            </div>
        </Link>
    );
};

export default IndexCard;
