import React from "react";
import Post from './Post'
import './feed.css'

function Feed(props) {
    const { items } = props
    return (
        <div className="feed">
            {items.map(item => {

                return <Post title={item.title} postImage={item.postImage} id={item.id} altText={item.altText} likes={item.likes} comments={item.comments} isLiked={item.isLiked}></Post>
            })
            }
        </div>
    )
}

export default Feed;