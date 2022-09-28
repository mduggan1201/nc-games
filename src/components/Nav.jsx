import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="navBar">
            <Link to="/">Home</Link><br />
            <Link to="/reviews">All Reviews</Link> <br />
            <Link to="/reviews/category/strategy"> Strategy Games</Link> <br />
            <Link to="/reviews/category/hidden-roles">Hidden Roles Games</Link><br />
            <Link to="/reviews/category/dexterity">Dexterity Games</Link><br />
            <Link to="/reviews/category/push-your-luck">Push Your Luck Games</Link><br />
            <Link to="/reviews/category/roll-and-write">Roll And Write Games</Link><br />
            <Link to="/reviews/category/deck-building">Deck Building Games</Link><br />
            <Link to="/reviews/category/engine-building">Engine Building Games</Link><br />
            <Link to="/">Users</Link> <br />
        </nav>
    )
}

export default Nav