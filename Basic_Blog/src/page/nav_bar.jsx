import { Link } from "react-router-dom";
function Navbar() {
    return ( 
        <div>
            <h1>NavLink</h1>
            <Link to={'/'}><button>Home</button></Link>
            <Link to={'/create'}><button>Create Blog</button></Link>
        </div>
     );
}

export default Navbar;