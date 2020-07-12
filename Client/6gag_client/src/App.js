import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Post from './HomePage/Feed/Post'

function App() {
  const img = require('./PostImages/Random.PNG')
  return (
    <div className="App">
      <header className="App-header">

      <Post imageSource={img} title="captured" toolTip="capture"></Post>
      </header>
    </div>
  );
}

export default App;
