import React, { Component } from "react";
import Feed from "./Feed";
import Config from "../Configuration"
import '../utils/ErrorStyle/error.css'
import './homePage.css'

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch(`${Config.serverPostsRoute}`,{ "headers": { "token": localStorage.getItem("x-access-token") } })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { isLoaded, items, error } = this.state;
        if (error) {
            return <div className="error-msg">Error:{error.message}</div>
        }
        else if (!isLoaded)
            return <div id="loading">Loading...</div>;
        else {
            return (
                <Feed items={items}></Feed>
            )
        }
    }
}