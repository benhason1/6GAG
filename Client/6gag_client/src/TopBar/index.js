import { Component } from 'react'
import React from 'react'
import { AppBar, Toolbar, Button, Tab, Tabs } from '@material-ui/core'
import './TopBar.css'
import UploadPostForm from '../UploadPostForm'
import Popup from '../utils/Popup'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class TopBar extends Component {
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
        return <Router>
            <AppBar style={{ background: "#fff" }}>

                <Toolbar >
                    <div id="six-gag-logo">
                        6gag
                        </div>

                    <Tabs style={{ color: "black" }}>
                        <Tab label="Home" component={Link} to="/" />
                        <Tab label="login" component={Link} to="/login" />
                        <Tab label="signUp" component={Link} to="/signUp" />
                    </Tabs>

                    <div id="upload-button">
                        <Button color="inherit" type="submit" onClick={this.onUploadButtonSubmit.bind(this)}>+ Upload</Button>
                        {this.state.showUploadPopup && <Popup closePopup={this.onUploadButtonSubmit.bind(this)} text={<UploadPostForm></UploadPostForm>}></Popup>}
                    </div>
                </Toolbar>
            </AppBar>

            <Route exact path="/" component={this.props.home}></Route>
            <Route exact path="/login" component={this.props.login}></Route>
            <Route exact path="/signUp" component={this.props.signUp}></Route>

        </Router>
    }
}

