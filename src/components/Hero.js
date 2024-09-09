import React, { useState, useEffect } from 'react';
import 'primeicons/primeicons.css';

const Hero = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        const handleScroll = () => setScrollY(window.scrollY);

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isMobile = windowWidth <= 768;

    const parallaxStyle = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    };

    const videoStyle = {
        position: 'absolute',
        top: `${scrollY * 1.5}px`,  // Adjusts based on scroll position for parallax effect
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
        transform: 'scale(1.5)',
        transformOrigin: 'center',
    };

    const heroTextStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        textAlign: 'center',
        zIndex: 1000,
    };

    const headingStyle = {
        fontSize: isMobile ? '24px' : '64px',
        margin: 0,
    };

    const subheadingStyle = {
        fontFamily: "Yellowtail",
        fontWeight: 400,
        fontSize: isMobile ? '42px' : '80px',
        margin: 0,
    };

    const scrollDownIconStyle = {
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#fff',
        fontSize: isMobile ? '40px' : '80px',
        animation: 'bounce 1.5s infinite',
    };

    return (
        <div style={parallaxStyle}>
            <video autoPlay muted loop style={videoStyle}>
                <source src="dummyHeroVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={heroTextStyle}>
                <p style={headingStyle}>Repent, for the kingdom of heaven is at hand</p>
                <p style={subheadingStyle}>Pinecrest Baptist Church</p>
            </div>
            <div style={scrollDownIconStyle}>
                <i className="pi pi-arrow-down"></i>
            </div>
            <style>
                {`
                    @keyframes bounce {
                        0%, 20%, 50%, 80%, 100% {
                            transform: translateY(0);
                        }
                        40% {
                            transform: translateY(-30px);
                        }
                        60% {
                            transform: translateY(-15px);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Hero;
