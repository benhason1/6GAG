import React, { Component } from 'react';
import { signUp } from '../../Services/AuthServices';
import InputForm from '../InputForm'


export default class SignUp extends Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitLogin(username,password) {
        signUp({"username":username,"password":password})
            .then(token => window.location = '/')
            .catch(err => alert(err));

    }

    render() {

        return <InputForm handleSubmit={this.submitLogin} title="Sign Up"/>

    }

}