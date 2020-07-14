import React from 'react'
import ReactTooltip from 'react-tooltip'
import './post.css'
import '../../../utils/ErrorStyle/error.css'
import Image from '../../../utils/Image'

function Post(props) {
    const { title, postImage, id, altText } = props
    return <div className="Post">
        <h3>{title}</h3>
        <ReactTooltip id={id}>{altText}</ReactTooltip>
        <div className="post-image-container" data-tip data-for={id}>
            <Image filePath={postImage} alt="post img" className="post-image"></Image>
        </div>
    </div>
}

export default Post;