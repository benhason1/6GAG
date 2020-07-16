import React, { Component } from 'react';
import { signUp } from '../../Services/AuthServices';
import InputForm from '../InputForm'


export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {isFailed:false,errMsg:''}
        this.submitLogin = this.submitLogin.bind(this);

    }
    
    submitLogin(username,password) {

        signUp({"username":username,"password":password})
            .then(token => window.location = '/')
            .catch(err => {
                this.setState({isFailed:true,errMsg:err})})
    }

    render() {
        if(this.state.isFailed){
            return(
                <div>
        <h3>failed: {this.state.errMsg}</h3>
                    <InputForm handleSubmit={this.submitLogin} title="Sign Up"/>
                    </div>
            )
        }
        else{
        return <InputForm handleSubmit={this.submitLogin} title="Sign Up"/>
    }
    }

}