import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"
import ReviewCard from "./ReviewCard"
import SortBy from "./SortBy"

const ReviewList = () => {
    const [gameReviews, setGameReviews] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [sortedBy, setSortedBy] = useState("created_at")
    const [orderedBy, setOrderedBy] = useState('desc')


    useEffect(() => {
        getReviews(sortedBy, orderedBy)
        .then(({ reviews }) => {
            setGameReviews(reviews);
            setIsLoading(false)
        })
    }, [sortedBy, orderedBy])

    if(isLoading) return <p>Loading Review List...</p>
    
    return (
        <div>
            <label>All Game Reviews</label>
            <SortBy setSortedBy={setSortedBy} setOrderedBy={setOrderedBy} sortedBy={sortedBy} orderedBy={orderedBy}/>
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