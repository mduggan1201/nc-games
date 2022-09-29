import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getReviewById, updateReviewById } from "../utils/api"
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import CommentList from "./CommentList";

const ReviewDescription = () => {
    const [gameReview, setGameReview] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [reviewVotes, setReviewVotes] = useState()

    let { review_id } = useParams()

    const handleUpvote = (() => {
        updateReviewById(review_id, 1)
        setReviewVotes((currVotes) => {
            let newVotes = 0
            newVotes = currVotes +1 
            return newVotes
        })
    })

    const handleDownvote = (() => {
        updateReviewById(review_id, -1)
        setReviewVotes((currVotes) => {
            let newVotes = 0
            newVotes = currVotes -1 
            return newVotes
        })
    })

    useEffect(() => {
        getReviewById(review_id)
        .then(({ review }) => {
            setGameReview(review)
            setReviewVotes(review.votes)
            setIsLoading(false)
        })
    },[])



if(isLoading) return <p>`Loading Item information for ID:${review_id}`</p>

return(
    <Grid container component="main" sx={{ height: '100vh' }}>
    <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
        backgroundImage: `url(${gameReview.review_img_url})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        bgcolor: 'text.secondary'
    }}
    />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <Box
        sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
        }}
    >
        <Link to="/reviews">Return to All Reviews</Link> <br />
        <Typography component="h1" variant="h2">
        {gameReview.title}
        </Typography><br/>
        <Typography component="h2" variant = "h4">
        {gameReview.category}
        </Typography><br/>
        <Typography component="p" variant = "h6">
        {gameReview.review_body}
        </Typography><br/>
        <Typography component ="h5" variant = "h5">
        Votes: {reviewVotes}
        </Typography>
        <Button variant ="outlined" sx={{ width: 345 }} onClick={() => {handleUpvote()}}>Upvote This Review</Button>
        <Button variant ="outlined" sx={{ width: 345 }} onClick={() => {handleDownvote()}}>Downvote This Review</Button>

        <CommentList review_id = {review_id}/>
        </Box>
    </Grid>
</Grid>
)
}
 
export default ReviewDescription


//to do - add error handling for when vote patch request fails. currently set up to be optimistic rendering.