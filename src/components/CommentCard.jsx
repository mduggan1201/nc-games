import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { deleteReviewComment, getCommentsByReviewId } from '../utils/api';

const CommentCard = ({ gameComment, setGameComments, review_id, setIsLoading }) => {

    const [deleteComment, setDeleteComment] = useState(0)
    const [isError, setIsError] = useState(null)

    useEffect(() => {
      if(deleteComment !== 0){
        setIsLoading(true)
        deleteReviewComment(deleteComment)
        .then((data) => {
          getCommentsByReviewId(review_id)
          .then(({ comments }) => {
            setGameComments(comments)
            setIsLoading(false)

          })
        }).catch((err) => {
          setIsLoading(false)
          setIsError({err})
        })
      }
    })

    if(isError) return (<p>Something went wrong when trying to delete a comment... please try again or contact support</p>)

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
      <button value = {gameComment.comment_id} onClick={(e) => setDeleteComment(e.target.value)}>Delete Comment</button>
      </Card>
      </div>
        )
}

export default CommentCard

//ToDo or Stretch, add some up/downvote functionality for these comments