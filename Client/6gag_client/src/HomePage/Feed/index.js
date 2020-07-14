import React from "react";
import Post from './Post'

function Feed(props) {
    const { items } = props
    return (
        <div>
            {items.map(item => {
                return <Post title={item.title} postImage={item.postImage} id={item.id} altText={item.altText}></Post>
            })
            }
        </div>
    )
}

export default Feed;
