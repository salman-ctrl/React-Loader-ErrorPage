import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
    const posts = useLoaderData()


    return (
        <>
            <h2>My Blog</h2>

            {posts.map((item, index) => (
                <div key={index}>
                    <Link to={`/blog/${item.id}`}>-{item.title}</Link>
                </div>
            ))}
        </>
    )
}

export default Blog;