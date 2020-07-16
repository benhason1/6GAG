import React, { Component } from 'react'
import { Button, TextField, MuiThemeProvider, createMuiTheme } from '@material-ui/core'

class InputForm extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(event) {
        const { username, password } = this.state
        event.preventDefault();
        this.props.handleSubmit(username, password)
        event.target.reset();

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
        return <form onSubmit={this.onSubmit}>
            <MuiThemeProvider theme={theme}>
                <div>
                    <h3>{this.props.title}</h3>
                    <TextField
                        hintText="Enter your username"
                        label="username"
                        name="username"
                        onChange={this.handleInputChange}
                        required
                    />
                    <br />
                    <TextField
                        type="password"
                        label="password"
                        name="password"
                        onChange={this.handleInputChange}
                        required
                    />
                    <br />
                    <Button variant="contained" primary={true} style={style} type="submit">Submit!</Button>
                </div>
            </MuiThemeProvider>
        </form>
    }
}
export default InputForm;