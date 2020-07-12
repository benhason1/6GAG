import { Component } from "react";
import Post from './Post'

function Feed(props) {
    const { items } = props
    return (
        <ul>
            {items.map(item => (
                <li >
                    <Post title={item.title} toolTip="working" imageSource="C:\ben\MMS\finalExercise\6GAG\Client\6gag_client\src\PostImages\Random.PNG"></Post>
                </li>
            ))
            }
        </ul>
    )

}

export default Feed;