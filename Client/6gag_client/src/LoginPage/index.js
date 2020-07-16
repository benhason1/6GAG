import React, { Component } from 'react';
import { login } from '../utils/Login';
import './loginPage.css'
import { TextField, MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import Button from '@material-ui/core/Button';


class Login extends Component {
    constructor() {
        super();
        this.state = { userName: '', password: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitLogin(event) {
        event.preventDefault();
        console.log(this.state)
        login(this.state)
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
                        <h3>login</h3>
                        <TextField
                            hintText="Enter your Username"
                            label="Username"
                            name="userName"
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
export default Login;