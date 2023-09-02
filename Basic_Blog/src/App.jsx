import { Link,Routes, Route } from "react-router-dom";

import Home from './page/home.jsx'
import CreateBlog from './page/create_blog.jsx'
import BlogDetail from "./page/blog_detail.jsx";
import ErrorPage from './page/error_page.jsx'
import Navbar from './page/nav_bar.jsx'

function App() {
  return ( 
    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts/:id" element={<BlogDetail/>}/>
      <Route path="/create" element={<CreateBlog/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </div>
   );
}

export default App;