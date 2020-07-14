import React from "react";
import Post from './Post'

function Feed(props) {
    const { items } = props
    return (
        <ul>
            {items.map(item => {
                return (<Post title={item.title} postImage={item.postImage} id={item.id} altText={item.altText}></Post>)
            })
            }
            )
        </ul>
    )
}

export default Feed;
