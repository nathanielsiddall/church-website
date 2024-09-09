import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'primereact/card';
import postsData from '../posts.json';

const BlogPost = () => {
    const { postIndex } = useParams();
    const post = postsData[postIndex];

    if (!post) return <div>Post not found</div>;

    return (
        <Card title={post.name} subTitle={`By ${post.author}`}>
            <img src={post.image} alt={post.name} style={{ width: '100%', height: 'auto' }} />
            <p>{post.content}</p>
        </Card>
    );
};

export default BlogPost;
