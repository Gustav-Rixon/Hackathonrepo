import logo from './meme0.gif';
import './App.css';
import React from 'react'
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />      
        <ReactPlayer 
        url='videos/RickAstley.mp4' 
        playing={true}
        muted={true}
        />
      </header>
    </div>
  );
}

export default App;
