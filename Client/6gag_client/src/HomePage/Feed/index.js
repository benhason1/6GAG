import React from "react";
import { Component } from 'react'
import Post from './Post'

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            base64data: null,
            reader : new FileReader()
        }
    }

    render() {
        const { items } = this.props
        var {base64data,reader} = this.state
        return (

            <ul>
                {items.map(item => {
                    console.log(item);
                    fetch("http://127.0.0.1:5000/files/?path=uploads\\1594733005960_for_bear.jpg")
                        .then((res) => res.blob())
                        .then(image => {
                            reader.readAsDataURL(image)
                            reader.onloadend = function () {
                                this.setstate({base64data:reader.result})
                                // base64data = reader.result;
                                console.log(base64data)
                            }
                        }
                        )
                    return (
                        <Post postId={item.id} title={item.title} toolTip={item.altText} imageSource={`data:image/jpeg;base64,${base64data}`}></Post>
                    )
                }
                )
                }
            </ul>
        )
    }
}

