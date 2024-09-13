import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const ButtonGrid = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate(); // Use navigate for navigation

    const buttons = [
        { label: 'About Us', to: '/about-us' },
        { label: 'What We Believe', to: '/what-we-believe' },
        { label: 'Our Media', to: '/our-media' },
        { label: 'Contact Us', to: '/contact-us' },
        { label: 'Learn', to: '/learn' },
        { label: 'Our Schedule', to: '/our-schedule' }
    ];

    const handleClick = (index, to) => {
        setActiveIndex(index);
        navigate(to); // Use navigate instead of history.push
    };

    return (
        <div className="button-bar">
            {buttons.map((btn, index) => (
                <button
                    key={index}
                    className={`button ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleClick(index, btn.to)}
                >
                    {btn.label}
                </button>
            ))}

            <style>{`
                .button-bar {
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    width: 100%;
                    z-index: 1000; /* Ensure it appears on top of other content */
                    position: sticky;
                    top: 0; /* Stick to the top of the page */
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow when it sticks */
                }
                .button {
                    flex: 1;
                    text-align: center;
                    padding: 5px;
                    background-color: #FBFBFC;
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                    height: 40px;
                    line-height: 30px;
                    cursor: pointer;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                .button:hover,
                .button.active {
                    background-color: #334F8F;
                    color: #FBFBFC;
                }
                @media screen and (max-width: 768px) {
                    .button-bar {
                        flex-wrap: wrap;
                    }
                    .button {
                        flex: 0 0 48%;
                        margin-bottom: 4%;
                        height: auto;
                    }
                }
            `}</style>
        </div>
    );
};

export default ButtonGrid;
