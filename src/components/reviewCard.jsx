import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const ReviewCard = ({ gameReview }) => {
    return(
        <div className = "reviewCard">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia 
        component = "img"
        height = "140"
        image = {gameReview.reivew_img_url}
        alt = {gameReview.title}
        />
        <CardContent>
        <h3 className="review-name">
          {gameReview.title}
        </h3>
      </CardContent>
      </Card>
      </div>
        )
}

export default ReviewCard




// return(
//     <li key = {gameReview.review_id}>{gameReview.title} </li> 
//     )