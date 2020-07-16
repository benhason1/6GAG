import React from 'react'
import { Component } from 'react'
import './likeButton.css'
import Config from '../../../../Configuration'
import axios from 'axios'
import classNames from 'classnames'

export default class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFirst: true,
            isActive: this.props.isLiked,
            likesNumber: this.props.likes
        }
    }


    handleClicked = () => {
        let { id } = this.props
        let { isActive, likesNumber } = this.state

        if (isActive) {
            likesNumber -= 1;
        }
        else {
            likesNumber += 1
        }

        axios.put(`${Config.serverPostsRoute}/${id}`, { "Action": "like" }, { "headers": { "token": localStorage.getItem(Config.accessTokenName) } })
            .then(() => console.log("updated"))
            .catch((err) => console.log(err))

        this.setState({ isActive: !isActive, likesNumber: likesNumber, isFirst: false })
    }

    render() {
        const { isActive, likesNumber, isFirst } = this.state

        //if first render of page doesnt show like animation
        let heartClassNames = classNames(
            {
                "heart heart-already-active": isActive && isFirst,
                "heart heart-active": isActive && !isFirst,
                "heart": !isActive
            }
        )

        return <div>
            <span id="likes">{likesNumber} likes</span>
            <div className="heart-btn" onClick={this.handleClicked}>
                <div className={isActive ? "content heart-active" : "content"}>
                    <span className={heartClassNames}></span>
                    <span className={isActive ? "text heart-active" : "text"}>Like</span>
                    <span className={isActive ? "numb heart-active" : "numb"}></span>
                </div>
            </div>
        </div>

    }
}