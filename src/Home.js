import BlogList from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
   const {data: blogs, loading, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className='Home'>
            { error && <p>{error}</p>}
        {loading && <p>Loading.....</p>}
           {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
           {blogs && <BlogList blogs={blogs.filter(( blog) =>blog.author==='mario')} title='Mario"s Blog'/>}
            
        </div>
     );
}
 
export default Home;