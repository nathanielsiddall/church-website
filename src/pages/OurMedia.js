import React from 'react';
import { Card } from 'primereact/card';
import VideoGallery from "../components/VideoGallery";
import VideoList from '../VideoList.json'

const OurMedia = () => {

    const pageStyle = {
         background: 'radial-gradient(circle, rgba(51,79,143,1) 22%, rgba(251,251,252,1) 100%)',

    };

    return (
        <div style={pageStyle} className="p-m-3">
            <VideoGallery  videos={VideoList} />
        </div>
    );
};

export default OurMedia;
