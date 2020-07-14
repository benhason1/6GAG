import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Post from './HomePage/Feed/Post'
import HomePage from './HomePage';
import TopBar from './TopBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TopBar></TopBar>
      <HomePage></HomePage>
      </header>
    </div>
  );
}

export default App;
