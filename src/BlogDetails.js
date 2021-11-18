import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, loading, error} = useFetch('http://localhost:8000/blogs/' + id)
    const goThroughHistory = useNavigate();

    const handleDelete=() => {
       
       
        fetch('http://localhost:8000/blogs/' +blog.id, {
      method: 'DELETE',
    }).then(() => {
      console.log('blog deleted');
      goThroughHistory('/')
    })
   
    }
    return ( 
        <div className="blog-details">
            {loading && <h4> Laoding.......</h4>}
               {error && <p> {error}</p>}
          {blog && <article>
               
               <h2>{blog.title}</h2>
               <p>Written by {blog.author}</p>
               <br/>
               <p>{blog.body}</p>
           </article>}
           <button onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default BlogDetails;