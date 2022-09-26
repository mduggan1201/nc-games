import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getReviewById } from "../utils/api"
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ReviewDescription = () => {
    const [gameReview, setGameReview] = useState()
    const [isLoading, setIsLoading] = useState(true)

    let { review_id } = useParams()

    useEffect(() => {
        getReviewById(review_id)
        .then(({ review }) => {
            setGameReview(review)
            setIsLoading(false)
        })
    })


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
        <Typography component ="h3" variant = "h4">
        Comments: {gameReview.comment_count}
        </Typography><br/>

        <p>Placeholder for comment cards to be listed here</p>
        </Box>
    </Grid>
</Grid>
)
}
 
export default ReviewDescription
