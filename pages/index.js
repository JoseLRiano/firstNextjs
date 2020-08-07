// import React, { Component } from "react";
import axios from 'axios';
import { async } from 'q';

const Index = ({ posts }) => {
    return (
        <>
            <h1>Our Index Page!!</h1>
            <ul>
                {posts.map(post => (
                    <li>{post.title}</li>
                ))}
            </ul>
        </>
    );
};
Index.getInitialProps = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const { data } = res;
    return { posts: data}
};

export default Index;