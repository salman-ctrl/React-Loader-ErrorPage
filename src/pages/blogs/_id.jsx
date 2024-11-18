import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";



const SinglePost = () => {
    const post = useLoaderData();
    const [loading] = useState(!post);

    if (loading) {
        return <p>loading..</p>
    }

    return (
        <>
            <h2>{post?.title}</h2>
            <div>{post?.body}</div>

        </>
    )
}

export default SinglePost;