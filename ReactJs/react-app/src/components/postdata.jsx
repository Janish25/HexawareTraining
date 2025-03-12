import { useState } from "react";
import postData from "../data/postData"


const PostRemover = () => {
    const post = postData;

    const [posts, setPosts] = useState(post.splice(0,10))

    const remover = (id) => {
        setPosts([...posts.filter(post => post.id !== id)]);
    }

    return (
        <>
            {
                posts.map((p, index)=>(
                    <div key={index}>
                        Post: {p.id}. {p.title} <br />
                        {p.body} <br />
                        <button onClick={()=>remover(p.id)}>Remove</button>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export default PostRemover;