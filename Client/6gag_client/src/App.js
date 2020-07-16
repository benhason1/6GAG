import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import TopBar from './TopBar'
import Login from './LoginPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar home={HomePage} login={Login}></TopBar>
      </header>
    </div>
  );
}

export default App;
