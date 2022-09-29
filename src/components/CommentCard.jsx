import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const CommentCard = ({ gameComment }) => {
    return(
        <div>
        <Card >
        <CardContent>
        <h3 className="review-name">
          From: {gameComment.author}
        </h3>
        <p>{gameComment.body}</p>
        <p>Votes: {gameComment.votes}</p>
      </CardContent>
      </Card>
      </div>
        )
}

export default CommentCard

//ToDo or Stretch, add some up/downvote functionality for these comments