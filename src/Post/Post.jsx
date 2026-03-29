import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const navigate = useNavigate()
    const hendleNaviget = () => {
        navigate("/home")
    }
    return (
        <div style={{border: "1px solid red", margin: "10px", padding: "10px"}}>
            <h2>{post.title}</h2>
            <Link to={`/posts/${post.id}`}>Post Details</Link>
            <button onClick={hendleNaviget}>Go Home</button>
        </div>
    );
};

export default Post;