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
            isFirst :true,
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

        this.setState({ isActive: !isActive,likesNumber:likesNumber,isFirst:false })
    }

    render() {
        const { isActive,likesNumber,isFirst } = this.state

        var classes = classNames(
            {
                'heart-active':!isFirst,
                'heart-already-active': isFirst
            }
        )

        return <div>
            <span id="likes">{likesNumber} likes </span>
            <div className={isActive?"heart-btn active":"heart-btn"} onClick={this.handleClicked}>
                <div className="content">
                    <span className="heart"></span>
                    <span className="text">Like</span>
                </div>
            </div>
        </div>

    }
}