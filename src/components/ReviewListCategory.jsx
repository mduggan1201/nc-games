import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getReviewsByCategory } from "../utils/api"
import ReviewCard from "./ReviewCard"

const ReviewListCategory = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [categoryReviews, setCategoryReviews] = useState()

    let { category } = useParams()

    useEffect(() => {
        getReviewsByCategory(category)
        .then(({ reviews }) => {
            setCategoryReviews(reviews)
            setIsLoading(false)
        })
    }, [category])

    if(isLoading) return <p> Loading Review List of {category}...</p>
    if(isError) return <p>Looks like there aren't any ${category} games</p>

    return (
        <div>
            <label>{`All ${category} Reviews`}</label>
            <ul>
                {categoryReviews.map((gameReview) => {
                    return( <ReviewCard key = {gameReview.review_id} gameReview = {gameReview} />
                    )
                })}
            </ul>
        </div>
    )
}

export default ReviewListCategory

/////To Add -- Error Handlig for Childrens games, it currently 404s but is listed as a game category