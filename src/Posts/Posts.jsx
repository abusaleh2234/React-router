import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData()
    console.log(posts);
    
    return (
        <div>
            <p>this is post.</p>
            <p>Post {posts.length}</p>
            <div  className="" >
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;