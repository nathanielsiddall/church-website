import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import postsData from '../posts.json';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(postsData);
    }, []);

    return (
        <div>
            <style>
                {`
                    @media (max-width: 768px) {
                        .post-container {
                            flex-direction: column !important; /* Stack the image above the text */
                            text-align: center !important; /* Center the text */
                        }

                        .post-container img {
                            width: 100% !important; /* Set the image width to 100% of the container */
                            height: auto !important; /* Keep the aspect ratio intact */
                            max-width: 100vw !important; /* Ensure the image never exceeds the viewport width */
                        }

                        .post-container img {
                            width: 100vw !important; /* Set image width to full viewport width */
                            height: 100vw !important; /* Set height to ensure it's square */
                            object-fit: cover !important; /* Ensure the image maintains aspect ratio */
                            margin: 0 !important; /* Remove any margins between image and post info */
                        }

                        .post-container .p-card {
                            margin-top: 0 !important; /* Remove space between image and post info */
                        }
                    }
                `}
            </style>
            <div
                className="p-grid p-align-center p-justify-center"
                style={{
                    background: 'linear-gradient(133deg, rgba(51,79,143,1) 22%, rgba(251,251,252,1) 100%)',
                    minHeight: '100vh',
                    padding: '2rem',
                }}
            >
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="p-col-12 p-md-6 p-lg-6 post-container"
                        style={{
                            display: 'flex',
                            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2rem',
                            maxWidth: '1200px',
                            margin: '0 auto',
                        }}
                    >
                        <div
                            style={{
                                flex: 0.4,
                                padding: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src={post.image}
                                alt={post.name}
                                style={{
                                    width: '25vh',
                                    height: '25vh',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                        </div>
                        <div style={{ flex: 1, padding: '1rem' }}>
                            <Card title={post.name} subTitle={post.author}>
                                <p>{post.content.substring(0, 100)}...</p> {/* Preview of content */}
                                <Button
                                    label="Read More"
                                    icon="pi pi-angle-right"
                                    onClick={() => window.location.href = `/blog/${index}`}
                                />
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
