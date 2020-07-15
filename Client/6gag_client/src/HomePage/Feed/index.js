import React from "react";
import Post from './Post'

function Feed(props) {
    const { items } = props
    return (
        <div>
            {items.map(item => {
    console.log(item)

                return <Post title={item.title} postImage={item.postImage} id={item.id} altText={item.altText} likes={item.likes} comments={item.comments} isLiked={item.isLiked}></Post>
            })
            }
        </div>
    )
}

export default Feed;
