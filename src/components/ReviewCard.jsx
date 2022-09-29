import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const ReviewCard = ({ gameReview }) => {
    return(
        <div className = "reviewCard">
        <Card sx={{ width: 345, height: 420 }}>

        <CardMedia 
        component = "img"
        height = "140"
        width = "345"
        image = {gameReview.review_img_url}
        alt = {gameReview.title}
        />

        <CardContent>
        <h3 className="review-name">
          {gameReview.title}
        </h3>
        <p>Category: {gameReview.category}</p>
        <p>Date: {gameReview.created_at}</p>
        <p>Comments: {gameReview.comment_count}</p>
        <p>Votes: {gameReview.votes}</p>
      </CardContent>
      <Link to = {`/reviews/${gameReview.review_id}`} className = "linker">Find Out More</Link>
      </Card>
      </div>
        )
}

export default ReviewCard