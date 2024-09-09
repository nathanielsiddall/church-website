import React, { useState, useEffect, useRef } from 'react';

const ScrollableImageGrid = ({ images = [] }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [scrollY, setScrollY] = useState(0);
    const gridRef = useRef(null);  // Reference to the grid container
    const [scaleValues, setScaleValues] = useState(0);  // Track scale of the images

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        const handleScroll = () => {
            setScrollY(window.scrollY);

            if (gridRef.current) {
                const gridTop = gridRef.current.getBoundingClientRect().top;
                const viewportHeight = window.innerHeight;

                // When the grid is between halfway and fully into the viewport
                if (gridTop < viewportHeight && gridTop > -viewportHeight) {
                    const progress = Math.min(1, (viewportHeight - gridTop) / viewportHeight);
                    const newScale = 1 + progress * 0.5;  // Scale from 1 to 1.5
                    setScaleValues(newScale);
                } else if (gridTop <= 0) {
                    setScaleValues(1.5);  // Keep the images fully scaled when the grid is fully in view
                } else {
                    setScaleValues(0);  // Hide the images before they're in view
                }
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isMobile = windowWidth <= 768;

    const gridItemStyle = {
        transform: `scale(${scaleValues})`,
        transition: 'transform 0.3s ease-out',
        opacity: scaleValues > 0 ? 1 : 0,  // Fade in when scaling starts
        transitionProperty: 'transform, opacity',
    };

    return (
        <div ref={gridRef} className={`image-grid ${isMobile ? 'mobile' : 'desktop'}`}>
            {images.map((image, index) => (
                <div className="grid-item" key={index} style={gridItemStyle}>
                    <img src={image.src} alt={image.alt} className="grid-image" />
                </div>
            ))}

            <style>
                {`
                .image-grid {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: -1;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                }

                .desktop .grid-item {
                    width: 33.33%;
                    height: 33.33vh;
                    overflow: hidden;
                    position: relative;
                }

                .mobile .grid-item {
                    width: 100%;
                    height: 33.33vh;
                    overflow: hidden;
                    position: relative;
                }

                .grid-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transform-origin: center;
                }
                `}
            </style>
        </div>
    );
};

export default ScrollableImageGrid;
