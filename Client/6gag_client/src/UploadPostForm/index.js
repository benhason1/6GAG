import React, { Component } from 'react';
import axios from 'axios';
import Config from "../Configuration"
import { TextField, StepButton } from '@material-ui/core'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./upload.css"

class Upload extends Component {
    initialState = {
        postImage: null,
        title: "",
        altText: "",
    }

    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            postImage: null,
            title: "",
            altText: "",
        }
    }

    initState = () => {
        this.setState({ ...this.initialState })
    }

    onFileChange = event => {
        this.setState({ postImage: event.target.files[0] });
    };


    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        for (let key of Object.keys(this.state)) {
            formData.append(key, this.state[key])
        }

        for (let key of Object.keys(Config.postInitData)) {
            formData.append(key, Config.postInitData[key])
        }


        axios.post(`${Config.serverPostsRoute}`, formData, { "headers": { "token": localStorage.getItem(Config.accessTokenName) } })
            // .then(_ => { this.state.isSuccedded = true })
            .then(_ => toast.success("upload succeeded!", { position: toast.POSITION.BOTTOM_RIGHT }))
            .catch(err => {
                console.log(err.message)
                toast.error("upload failed", { position: toast.POSITION.BOTTOM_RIGHT, })
            })
        //clean form and state
        event.target.reset();
        this.initState()
    };

    render() {
        return (
            <div style={{ "color": "black" }}>
                <form onSubmit={this.onSubmit}>

                    <div>
                        <TextField type="text" label="Title" name="title" onChange={this.handleInputChange} required></TextField>
                    </div>
                    <div>
                        <TextField type="text" label="Alt Text" name="altText" onChange={this.handleInputChange} required></TextField>
                    </div>

                    <div>
                        <input type="file" accept=".jpg, .jpeg, .png" name="postImage" onChange={this.onFileChange} required />
                        <StepButton type="submit">
                            Submit!
                        </StepButton>
                    </div>
                    <ToastContainer style={{ fontSize: "30px" }}></ToastContainer>
                </form>
            </div>
        );
    }
}

export default Upload; 