import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const DB_URL = "http://localhost:3000/posts/";

function BlogDetail() {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(DB_URL + id);
  const history = useNavigate();

  const handleDeleteClick = () => {
    fetch(DB_URL + blog.id, { method: "DELETE" }).then(() => {
      history("/");
    });
  };

  return (
    <div className="BlogDetail">
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <p>{blog.likes}</p>
        </article>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default BlogDetail;
