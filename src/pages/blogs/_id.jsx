import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const SinglePost = () => {
    const params = useParams();
    const [post, setPosts] = useState(null);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((response) => response.json())
            .then((json) => {
                console.log("Data Di ambil :", json);
                setPosts(json);

            });
    }, []);

    return (
        <>
            <h2>{post?.title}</h2>
            <div>{post?.body}</div>

        </>
    )
}

export default SinglePost;