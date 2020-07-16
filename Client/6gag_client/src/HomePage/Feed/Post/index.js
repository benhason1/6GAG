import React from 'react'
import { Component } from 'react'
import Popup from '../../../utils/Popup'
import { AppBar } from '@material-ui/core'

import ReactTooltip from 'react-tooltip'
import './post.css'
import '../../../utils/ErrorStyle/error.css'
import Image from '../../../utils/Image'
import LikeButton from './Like'
import CommentSection from './CommentSection'
import CommentForm from './CommentSection/CommentForm'

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUploadPopup: false
        }
    }


    onUploadButtonSubmit() {
        this.setState({
            showUploadPopup: !this.state.showUploadPopup
        })
    }

    render() {
        const { title, postImage, id, altText, likes, isLiked, comments } = this.props

        return <div className="post">
            <h3>{title}</h3>

            <ReactTooltip id={id}>{altText}</ReactTooltip>
            <div className="post-image-container" data-tip data-for={id} onClick={this.onUploadButtonSubmit.bind(this)}>
                <Image filePath={postImage} alt="post img" className="post-image" ></Image>
            </div>

            <div className="post-data">
                <span className="like-input">
                    <LikeButton id={id} likes={Number(likes)} isLiked={Boolean(isLiked)}></LikeButton>
                </span>
                <span className="comment-input">
                    <CommentForm id={id}></CommentForm>

                </span >
                <div className="post-popup">
                    <AppBar>
                        {this.state.showUploadPopup && <Popup closePopup={this.onUploadButtonSubmit.bind(this)} text={<div><CommentSection id={id} comments={comments instanceof (Array) ? comments : []}></CommentSection>
                            <div className="popup-comment-form">
                                <CommentForm id={id} ></CommentForm>
                            </div></div>}>
                        </Popup>}
                    </AppBar>
                </div>
            </div>
        </div>
    }
}

