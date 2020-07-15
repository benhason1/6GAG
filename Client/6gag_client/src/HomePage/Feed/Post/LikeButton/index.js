import React from 'react'
import { Component } from 'react'
import './likeButton.css'
import Config from '../../../../Configuration'
import axios from 'axios'

export default class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: this.props.isLiked,
            likesNumber : this.props.likes
        }
    }


    handleClicked = () => {
        let { id } = this.props
        let { isActive,likesNumber } = this.state
        
        if (isActive) {
            likesNumber -= 1;
        }
        else {
            likesNumber += 1
        }

        axios.put(`${Config.serverPostsRoute}/${id}`, { "Action": "like" })
            .then(() => console.log("updated"))
            .catch((err) => console.log(err))

        this.setState({ isActive: !isActive,likesNumber:likesNumber })
    }

    render() {
        const { isActive,likesNumber } = this.state

        return <div>
            <span id="likes">{likesNumber} likes: </span>
            <div className="heart-btn" onClick={this.handleClicked}>
                <div className={isActive ? "content heart-active" : "content"}>
                    <span className={isActive ? "heart heart-active" : "heart"}></span>
                    <span className={isActive ? "text heart-active" : "text"}>Like</span>
                    <span className={isActive ? "numb heart-active" : "numb"}></span>
                </div>
            </div>
        </div>

    }
}