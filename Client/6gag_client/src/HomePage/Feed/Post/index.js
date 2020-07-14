import React from 'react'
import ReactTooltip from 'react-tooltip'

function Post(props) {
    return <div className="Post">
        <h3>{props.title}</h3>
        <img src={props.imageSource} alt="post logo" width="700" height="300" data-tip data-for={props.postId}></img>
        <ReactTooltip id={props.postId}>{props.toolTip}</ReactTooltip>
    </div>
}

export default Post;
