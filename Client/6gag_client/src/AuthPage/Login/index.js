import React, { Component } from 'react';
import { login } from '../../Services/AuthServices';
import './login.css'
import InputForm from '../InputForm'

class Login extends Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event,username,password) {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitLogin(username,password) {
        login({"username":username,"password":password})
            .then(token => window.location = '/')
            .catch(err => alert(err));

    }

    render() {
        return <InputForm handleSubmit={this.submitLogin} title="Log In"/>
    
    }

}
export default Login;