import { Component } from "react";
import { Feed } from "./Feed/FeedView";
import {Config} from "../Configuration"

export default class HomePage extends Component(){
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
        }
    }

    //need to handle error
    componentDidMount(){
        fetch(Config.serverIp)
        .then(res=>res.json())
        .then(
            (result)=>
            this.setState({
                isLoaded=true,
                items: result.items
            })
        )
    }

    render(){        
        const {isLoaded, items} = this.state;
        if(!isLoaded)
            return <div>Loading...</div>
        else{
            return(
               <Feed items={items}></Feed>
            )
        }
    }
}