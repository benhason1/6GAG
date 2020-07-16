import React, { Component } from 'react';
import { login } from '../../Services/AuthServices';
import './login.css'
import InputForm from '../InputForm'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { isFailed: false, errMsg: '' }
        this.submitLogin = this.submitLogin.bind(this);

    }

    submitLogin(username, password) {
        login({ "username": username, "password": password })
            .then(token => window.location = '/')
            .catch(err => {
                this.setState({ isFailed: true, errMsg: err })
            })

    }

    render() {
        if (this.state.isFailed) {
            return (
                <div>
                    <h3>failed: {this.state.errMsg}</h3>
                    <InputForm handleSubmit={this.submitLogin} title="Log In" />
                </div>
            )
        }
        else {
            return <InputForm handleSubmit={this.submitLogin} title="Log In" />
        }
    }


}
export default Login;