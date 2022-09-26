import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="navBar">
            <Link to="/">Home</Link><br />
            <Link to="/reviews">Reviews</Link> <br />
            <Link to="/">Users</Link> <br />
        </nav>
    )
}

export default Nav