import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import TopBar from './TopBar'
import Login from './Login'
import SignUpPage from './SignUp'
import { isAuthenticated } from './Services/AuthServices'
import AuthPage from './AuthPage'

function App() {
  if (!isAuthenticated()) {
    return     <div className="App">
        <header className="App-header">
    <AuthPage login={Login} signUp={SignUpPage}></AuthPage>
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
