import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const goThroughHistory = useNavigate();

    const handleSubmit=(e) => {
        e.preventDefault();
        const  blog= {title,body, author};
       
        fetch('https://reactblogsites.netlify.app/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      goThroughHistory('/')
    })
   
    }

    return (  
        <div className='create' >
            <h3>Add a new Blog</h3>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type='text' 
                required
                value={title}
                onChange= {(e) => setTitle(e.target.value)}
                
                ></input>
                <label>Blog body:</label>
                <textarea required
                value={body}
                onChange= {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value='mario'>Mario</option>
                    <option value='yoshi'>Yoshi</option>
                </select>
                <button>Add Blog</button>
               
                
            </form>
            

        </div>
    );
}
 
export default Create;