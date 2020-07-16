import React from 'react'
import './commentSection.css'
import Typography from '@material-ui/core/Typography'



function CommentSection(props) {
    const { comments } = props

    return <div className="comment-section">
        <Typography variant="h5" component="h3">
            Comments Section:
            </Typography>


        {comments.map(item => {
            return <div className="comment-content">{item}</div>
        })}

    </div>

}


export default CommentSection;
