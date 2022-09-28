import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCategories } from "../utils/api"

const Nav = () => {

    const [categories, setCategories] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCategories()
        .then(({category}) => {
            setCategories(category);
            setIsLoading(false)
        })
    }, [])

    if(isLoading) return <p>Loading Category Navigation...</p>

    return (
        <nav className="navBar">
            <Link to="/">Home</Link><br />
                {categories.map((category) => {
                    return( <div>
                                <Link to={`/reviews/category/${category.slug}`}>{category.slug} Games</Link> <br />
                            </div>
                    )
                })}
            <Link to="/">Users</Link> <br />
        </nav>
    )
}

export default Nav