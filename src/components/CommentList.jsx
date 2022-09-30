import { useState, useEffect } from "react"
import { getCommentsByReviewId } from "../utils/api"
import CommentCard from "./CommentCard"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NewComment from "./NewComment";

const CommentList = ({ review_id }) => {
    const [gameComments, setGameComments] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCommentsByReviewId(review_id)
        .then(({ comments }) => {
            setGameComments(comments)
            setIsLoading(false)
        })
    }, [review_id])

    if(isLoading) return <p>Loading Comment List...</p>

    return (
        <Box
            sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}
        >
            <Typography component="h2" variant = "h4">{`Comments`}</Typography>
            <NewComment review_id = {review_id}/>
            <ul>
                {gameComments.map((gameComment) => {
                    return ( <CommentCard key = {gameComment.comment_id} gameComment ={gameComment} setGameComments ={setGameComments} review_id = {review_id} setIsLoading = {setIsLoading} />
                    )
                })}
            </ul>
            </Box>
    )
}

export default CommentList

/// To Do - Add Error handling for 404 requests