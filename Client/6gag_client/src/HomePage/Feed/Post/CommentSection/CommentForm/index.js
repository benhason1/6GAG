import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import Config from '../../../../../Configuration'
import './comment.css'

export default class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentComment: "",
        }
    }

    handleClicked = (event) => {
        event.preventDefault();

        const { id } = this.props
        const { currentComment } = this.state

        axios.put(`${Config.serverPostsRoute}/${id}`, { "Action": "comment", "payload": { "content": currentComment } })
            .then(() => console.log("updated comment"))
            .catch((err) => console.log(err))

        event.target.reset();
    }

    onCommentInputChange = event => {
        this.setState({ currentComment: event.target.value })
    }

    render() {
        return (
            <form className="comment-form form-group" onSubmit={this.handleClicked}>
                <div className="input-group">
                    <input type="text" placeholder="Say something..." className="form-control" onChange={this.onCommentInputChange} />
                </div>
                <input type="submit" value="Post" className="btn btn-primary" />
            </form>
        )
    }
}
