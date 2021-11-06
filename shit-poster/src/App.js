import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
       
        <ReactPlayer 
        playing={true} 
        url='videos/RickAstley.mp4' 
        />
        </a>
      </header>
    </div>
  );
}

export default App;
