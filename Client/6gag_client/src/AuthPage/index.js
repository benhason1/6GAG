import React, { Component } from 'react'
import { AppBar, Toolbar, Tab, Tabs } from '@material-ui/core'
import { BrowserRouter as Router, Link, Route,Redirect } from 'react-router-dom';
import Login from './Login'
import SignUp from './SignUp'

export default class TopBar extends Component {

    render() {
        return <Router>
            <AppBar style={{ background: "#fff" }}>
                <Redirect to="/login"/>
                <Toolbar >
                    <div id="six-gag-logo">
                        6gag
                        </div>

                    <Tabs style={{ color: "black" }} initialSelected={1}>
                        <Tab label="login" component={Link} to="/login" value={2} />
                        <Tab label="signUp" component={Link} to="/signUp" value={1}  />
                    </Tabs>

                </Toolbar>
            </AppBar>

            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signUp" component={SignUp}></Route>


        </Router>
    }
}

