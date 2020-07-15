import React from 'react'
import ReactTooltip from 'react-tooltip'
import './post.css'
import '../../../utils/ErrorStyle/error.css'
import Image from '../../../utils/Image'
import { IconButton } from '@material-ui/core'
import LikeButton from './LikeButton'

function Post(props) {

    const { title, postImage, id, altText, likes, comments } = props
    let commentNumber = 0;
    if (typeof (comments) === Array)
        commentNumber = comments.length


    return <div className="post">
        <h3>{title}</h3>

        <ReactTooltip id={id}>{altText}</ReactTooltip>
        <div className="post-image-container" data-tip data-for={id}>
            <Image filePath={postImage} alt="post img" className="post-image"></Image>
        </div>

        <div className="post-data">
            <LikeButton id={id}  likesNumber={likes}></LikeButton>

            <span id="likes">{likes} likes</span>
            <span>
                {commentNumber} comments
            </span>
        </div>
    </div>
}

export default Post;