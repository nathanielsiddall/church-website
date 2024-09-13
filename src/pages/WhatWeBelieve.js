import React from 'react';
import SectionBlock from "../components/SectionBlock";
import WWB from '../WhatWeBelive.json';

const WhatWeBelieve = () => {
    return (
        <div className="container">
            <div className="video-container">
                <video autoPlay loop muted id="backgroundVideo">
                    <source src="/church-website/dummyHeroVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay"></div>
            </div>
            <div className="content">
                <h1>What we believe</h1>
                <SectionBlock data={WWB} />
            </div>

            <style>{`
                .video-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1; /* Lower z-index than the menu */
                    overflow: hidden;
                }

                #backgroundVideo {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 0; /* Overlay sits above the video */
                }

                .container {
                    position: relative;
                    z-index: 1; /* Content sits above the overlay and video */
                }

                .content {
                    color: #ffffff;
                    text-align: center;
                    padding: 20px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }

                h1 {
                    color: rgba(255, 255, 255, 0.9);
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
};

export default WhatWeBelieve;
