import React from 'react'
import { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import './post.css'

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            base64data: null,
            error: null
        }
    }

    componentDidMount() {
        let reader = new FileReader();
        fetch("http://127.0.0.1:5000/files/?path=uploads\\1594733005960_for_bear.jpg")
            .then((res) => res.blob())
            .then((image) => {
                reader.readAsDataURL(image)
                reader.onloadend = () => {
                    this.setState({ base64data: reader.result })
                }
            })
            .catch((err) => {
                console.log(`error: ${err}`)
                this.setState({ error: err })
            })
    }

    render() {
        const { title, postImage, id, altText } = this.props

        if (this.state.isError) {
            return <div>
                <h3>{title}</h3>
                {this.state.error.message}
            </div>
        }

        else if (!this.state.base64data) {
            return <div>
                <h3>{title}</h3>
                loading image ...
            </div>
        }

        else {
            return <div className="Post">
                <h3>{title}</h3>
                <ReactTooltip id={id}>{altText}</ReactTooltip>
                <img src={`data:image/jpeg;base64,${this.state.base64data}`} alt="post logo" width="700" height="300" data-tip data-for={id}></img>
            </div>
        }
    }
}

