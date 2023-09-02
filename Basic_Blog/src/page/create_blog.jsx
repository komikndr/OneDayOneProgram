import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DB_URL = "http://localhost:3000/posts/";

function CreateBlog() {
    const navigate = useNavigate()
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [likes, setLikes] = useState(0)

    const handleSubmit= (e)=>{
        e.preventDefault()
        const blog = {title, body, likes}
        fetch(DB_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
           navigate(-1) 
        })
    }
    return (
        <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input 
            type="text" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Likes:</label>
            <textarea
            required
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
            ></textarea>
            <button>Add Blog</button>
        </form>
        </div>)
}

export default CreateBlog;
