import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { postComment } from '../utils/api';
import { Box } from '@mui/system';

const NewComment = ({ review_id }) => {

    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const authorRef = useRef('')
    const bodyRef = useRef('')


    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleCancel = () => {
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
        setIsLoading(true)
        postComment(review_id, authorRef.current.value, bodyRef.current.value)
        .then(setIsLoading(false))
        .catch((err) => {
          setError(true)
          setErrorMessage(err.response.data.msg)
        })
      };

    const handleReset = () => {
      setError(false)
      setErrorMessage()
    }

      if(isLoading) return <p>Adding Comment to Database...</p>
      if(isError) return (<Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        >
      <h4> {errorMessage} </h4>
        <Button variant="outlined" onClick={handleReset} sx={{ width: 345,  }}>
        Try Again
      </Button>
      </Box>
      )
      
      return (
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Comment
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>New Comment</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To add a new comment to this review, enter your username and comment below
              </DialogContentText>
              <TextField inputRef={authorRef}
                sx={{mb: 2}}
                required 
                id="author-required"
                label="Author"
                fullWidth
              />
            <TextField inputRef={bodyRef}
                sx={{mb: 2}}
                required 
                id="comment-required"
                label="Comment"
                fullWidth
                multiline
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button onClick={handleClose}>Submit</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}


export default NewComment