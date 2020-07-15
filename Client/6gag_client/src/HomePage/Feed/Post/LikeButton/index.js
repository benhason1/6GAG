import React from 'react'
import { Component } from 'react'
import './likeButton.css'
import Config from '../../../../Configuration'
import axios from 'axios'

export default class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false
        }
    }


    

    handleClicked= ()=>{
        // this.props.onClick();
        let {likesNumber, id} = this.props
        const { isActive } = this.state

        //if the likes button is already active
        if(isActive){
            likesNumber-=1;
        }
        else{
            likesNumber+=1
        }

        axios.put(`${Config.serverPostsRoute}/${id}`,{"likes":likesNumber})
        .then(()=>console.log("updated"))
        .catch((err)=>console.log(err))

        this.setState({isActive:!isActive})

    }

    render() {
        const { isActive } = this.state
        
        return <div className="heart-btn" onClick={this.handleClicked}>
            <div className={isActive ? "content heart-active" : "content"}>
                <span className={isActive ? "heart heart-active" : "heart"}></span>
                <span className={isActive ? "text heart-active" : "text"}>Like</span>
                <span className={isActive ? "numb heart-active" : "numb"}></span>
            </div>
        </div>
    }
}