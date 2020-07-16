import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import TopBar from './TopBar'
import Login from './Login'
import SignUpPage from './SignUp'
import { isAuthenticated } from './Services/AuthServices'
import LoginContainer from './LoginContainer'

function App() {
  if (!isAuthenticated()) {
    return     <div className="App">
        <header className="App-header">
    <LoginContainer login={Login} signUp={SignUpPage}></LoginContainer>
    </header>
    </div>
  }
  else {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar home={HomePage} login={Login} signUp={SignUpPage}></TopBar>
        </header>
      </div>
    );
  }
}

export default App;
