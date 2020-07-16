import React, { Component } from 'react';
import { signUp } from '../utils/Login';
import {Button, TextField, MuiThemeProvider, createMuiTheme } from '@material-ui/core'


export default class SignUp extends Component {
    constructor() {
        super();
        this.state = { username: '', password: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitLogin(event) {
        event.preventDefault();
        signUp(this.state)
            .then(token => window.location = '/')
            .catch(err => alert(err));
        event.target.reset();

        this.setState({ userName: '', password: '' })
    }

    render() {
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: "#000",
                }
            },
            typography: {
                body1: {
                    fontFamily: "Comic Sans",
                    fontSize: "20px",
                }
            },
        });

        const style = {
            margin: 15,
        };
        return (
            <form onSubmit={this.submitLogin}>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <h3>Sign Up</h3>
                        <TextField
                            hintText="Enter your username"
                            label="username"
                            name="username"
                            onChange={this.handleInputChange}
                        />
                        <br />
                        <TextField
                            type="password"
                            label="password"
                            name="password"
                            onChange={this.handleInputChange}
                        />
                        <br />
                        <Button variant="contained" primary={true} style={style} type="submit">Submit!</Button>
                    </div>
                </MuiThemeProvider>
            </form>
        );
    }

}