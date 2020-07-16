import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Post from './HomePage/Feed/Post'
import HomePage from './HomePage';
import TopBar from './TopBar'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar home={HomePage}></TopBar>
      </header>
    </div>
  );
}

export default App;
