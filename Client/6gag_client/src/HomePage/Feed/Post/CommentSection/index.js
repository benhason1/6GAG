import React from 'react'
import CommentForm from './CommentForm'
import './commentSection.css'
import { Paper, AppBar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { black } from 'color-name'



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
