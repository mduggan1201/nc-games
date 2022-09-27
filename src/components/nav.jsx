import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="navBar">
            <Link to="/">Home</Link><br />
            <Link to="/reviews">All Reviews</Link> <br />
            <Link to="/reviews/category/euro_game"> Euro Games</Link> <br />
            <Link to="/reviews/category/social_deduction">Social Deduction Games</Link><br />
            <Link to="/reviews/category/dexterity">Dexterity Games</Link><br />
            <Link to="/reviews/category/childrens">Children's Games</Link><br />
            <Link to="/">Users</Link> <br />
        </nav>
    )
}

export default Nav