import React from 'react';
import { Link } from 'react-router-dom';
const Home=()=>{
    return (
        <div>
            <h1>Home</h1>
            <p>hii everyone</p>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <Link to="/">Home</Link> 
            <Link to="/about">About</Link> 
           </div>
    );
};
export default Home
