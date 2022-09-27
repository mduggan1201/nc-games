import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"
import ReviewCard from "./ReviewCard"

const ReviewList = () => {
    const [gameReviews, setGameReviews] = useState()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getReviews()
        .then(({ reviews }) => {
            setGameReviews(reviews);
            setIsLoading(false)
        })
    }, [])

    if(isLoading) return <p>Loading Review List...</p>
    
    return (
        <div>
            <label>All Game Reviews</label>
            <ul>
                {gameReviews.map((gameReview) => {
                    return( <ReviewCard key = {gameReview.review_id} gameReview = {gameReview} />
                    )
                })}
            </ul>
        </div>
    )
}

export default ReviewList