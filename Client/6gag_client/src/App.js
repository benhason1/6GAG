import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import TopBar from './TopBar'
import Login from './LoginPage'
import { isAuthenticated } from './utils/Login'

function App() {
  if (!isAuthenticated()) {
    return <Login></Login>
  }
  else {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar home={HomePage}></TopBar>
        </header>
      </div>
    );
  }
}

export default App;
