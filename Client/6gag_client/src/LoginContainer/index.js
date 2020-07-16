import { Component } from 'react'
import React from 'react'
import { AppBar, Toolbar, Button, Tab, Tabs } from '@material-ui/core'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class TopBar extends Component {

    render() {
        return <Router>
            <AppBar style={{ background: "#fff" }}>

                <Toolbar >
                    <div id="six-gag-logo">
                        6gag
                        </div>

                    <Tabs style={{ color: "black" }}>
                        <Tab label="login" component={Link} to="/login"  />
                        <Tab label="signUp" component={Link} to="/signUp"  />

                    </Tabs>

                </Toolbar>
            </AppBar>

            <Route exact path="/login" component={this.props.login}></Route>
            <Route exact path="/signUp" component={this.props.signUp}></Route>


        </Router>
    }
}

