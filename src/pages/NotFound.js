import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
        backgroundColor: '#FBFBFC',
        color: '#334F8F',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
    };

    const titleStyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
    };

    const messageStyle = {
        fontSize: '1.5rem',
        margin: '20px 0',
    };

    const buttonStyle = {
        backgroundColor: '#334F8F',
        color: '#FBFBFC',
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '1.2rem',
        textDecoration: 'none',
        marginTop: '20px',
        cursor: 'pointer',
    };

    return (
        <div style={pageStyle}>
            <h1 style={titleStyle}>404 - Page Not Found</h1>
            <p style={messageStyle}>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" style={buttonStyle}>Go Back Home</Link>
        </div>
    );
};

export default NotFound;
