import React from 'react'
import ReactTooltip from 'react-tooltip'
import './post.css'
import '../../../utils/ErrorStyle/error.css'
import Image from '../../../utils/Image'
import { IconButton } from '@material-ui/core'
import LikeButton from './Like'
import CommentSection from './CommentSection'

function Post(props) {
    const { title, postImage, id, altText, likes, isLiked,comments } = props

    // let commentNumber = 0;
    // if (comments instanceof(Array))
    // {
    //     commentNumber = comments.length
    // }   


    return <div className="post">
        <h3>{title}</h3>

        <ReactTooltip id={id}>{altText}</ReactTooltip>
        <div className="post-image-container" data-tip data-for={id}>
            <Image filePath={postImage} alt="post img" className="post-image"></Image>
        </div>

        <div className="post-data">
            <LikeButton id={id}  likes={Number(likes)} isLiked={Boolean(isLiked)}></LikeButton>

            <CommentSection id={id} comments={comments instanceof(Array)?comments:[]}></CommentSection>
        </div>
    </div>
}

export default Post;