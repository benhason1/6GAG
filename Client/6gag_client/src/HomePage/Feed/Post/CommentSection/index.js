import React from 'react'
import { Component } from 'react'
import StepButton from '@material-ui/core'
import axios from 'axios'
import Config from '../../../../Configuration'

export default class Comment extends Component {


    constructor(props) {
        super(props)
        this.state = {
            currentComment: "",
            comments: this.props.comments
        }
    }

    handleClicked = (event) => {
        event.preventDefault();
        
        const { id } = this.props
        let { currentComment } = this.state

        axios.put(`${Config.serverPostsRoute}/${id}`, { "Action": "comment", "payload": { "content": currentComment } })
            .then(() => console.log("updated comment"))
            .catch((err) => console.log(err))

        this.setState({ comments: [...this.state.comments, currentComment], currentComment: "" })
        event.target.reset();
    }

    onCommentInputChange = event => {
        this.setState({ currentComment: event.target.value })
    }

    render() {
        const { comments } = this.state

        return <div>
            {comments.map(item => {
                return <div>{item}</div>
            })}

            <form onSubmit={this.handleClicked}>
                <input type="text" placeholder="enterComment" onChange={this.onCommentInputChange}></input>
                <button type="submit">
                    Post!
                </button>
            </form>
        </div>

    }
}