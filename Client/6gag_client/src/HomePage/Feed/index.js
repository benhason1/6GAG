import React from "react";
import Post from './Post'

function Feed(props) {
    const { items } = props
    return (
        <ul>
            {items.map(item => (
                // need to change it to recive the file content from server
                <Post title={item.title} toolTip="working" imageSource={require("C:\\ben\\MMS\\finalExercise\\6GAG\\Client\\6gag_client\\src\\PostImages\\Random.PNG")}></Post>
            ))
            }
        </ul>
    )
}

export default Feed;
