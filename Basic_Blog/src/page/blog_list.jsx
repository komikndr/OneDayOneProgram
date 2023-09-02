import { Link } from "react-router-dom";

function BlogList({ blogs }) {
  return (
    <div>     
      {blogs.map((blog)=>(
        <div key={blog.id}>
          <Link to={`/posts/${blog.id}`}>
            <h1>{blog.title}</h1>
            <p>Likes: {blog.likes}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;


      // {blogs.map((blog)=>{
      //   <div key={blog.id}>
      //     <Link to={`/blogs/${blog.id}`}>
      //       <h1>{blog.title}</h1>
      //       <p>Likes: {blog.likes}</p>
      //     </Link>
      //   </div>
      // })}