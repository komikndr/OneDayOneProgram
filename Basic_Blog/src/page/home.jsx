import BlogList from "./blog_list";
import useFetch from "./useFetch";

const DB_URL = "http://localhost:3000/posts";

function Home() {
    const { data:blogs, isPending, error} = useFetch(DB_URL)
    return (
        <div>
            { error && <div> {error}</div>}
            { isPending && <div>Loading....</div>}
            { blogs && <BlogList blogs={blogs}/>}
        </div>
      );
}

export default Home;