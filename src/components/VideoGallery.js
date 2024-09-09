import React from 'react';
import { Card } from 'primereact/card';
import { useMediaQuery } from 'react-responsive';

const VideoGallery = ({ videos }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const videoWrapperStyle = {
        position: 'relative',
        paddingBottom: '56.25%',
        height: '0',
        overflow: 'hidden',
        maxWidth: '100%',

    };

    const cardBody = {
        marginTop: '3vh',

    };

    const iframeStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        border: '0',
    };

    return (
        <div style={{ marginLeft: '5vh', marginRight: '5vh', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem' }}>
            {videos.map((video, index) => (
                <Card style={cardBody} key={index} title={video.name} subTitle={video.speaker}>
                    <div style={videoWrapperStyle}>
                        <iframe
                            style={iframeStyle}
                            src={`${video.embedCode}?vq=hd1080`}
                            title={video.name}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        />
                    </div>
                    <p>{video.description}</p>
                </Card>
            ))}
        </div>
    );
};

export default VideoGallery;
