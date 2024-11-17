import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => {
                setPosts(json); setLoading(false);
            })
            .catch((err) => {
                setError("gagal untuk mendapatkan data");
                setLoading(false);
            })

    }, [])

    if (loading) return <p>loading..</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <h2>My Blog</h2>

            {post.map((item, index) => (
                <div key={index}>
                    <Link to={`/blog/${item.id}`}>-{item.title}</Link>
                </div>
            ))}
        </>
    )
}

export default Blog;