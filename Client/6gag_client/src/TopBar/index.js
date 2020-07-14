import { Component } from 'react'
import React from 'react'
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core'
import './TopBar.css'
import UploadPostForm from '../UploadPostForm'
import Popup from '../utils/Popup'

export default class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            showUploadPopup: false
        }
    }

    onUploadButtonSubmit() {
        this.setState({
            showUploadPopup: !this.state.showUploadPopup
        })
    }

    render() {
        return <div className="top-bar">

            <AppBar style={{ background: "#fff" }}>

                <Toolbar >
                    <div id="six-gag-logo">
                        6gag
                    </div>
                    <div id="upload-button">
                        <Button color="inherit" type="submit" onClick={this.onUploadButtonSubmit.bind(this)}>+ Upload</Button>
                        {this.state.showUploadPopup && <Popup closePopup={this.onUploadButtonSubmit.bind(this)} text={<UploadPostForm></UploadPostForm>}></Popup>}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    }
}

