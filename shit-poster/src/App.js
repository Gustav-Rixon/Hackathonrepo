import meme from './meme/meme0.gif';
import meme2 from './meme/5t6skv.jpg';
import meme3 from './meme/edison.jpg';
import './App.css';
import React from 'react'
import ReactPlayer from 'react-player'
import axios from 'axios';
import ReactSlider from 'react-slider';

function getTheMeMe(){
  console.log("helloe");
  axios.get('./MemeIndex.json')
  .then(res => {
    //const path = res.path;
    console.log('hi???????????????????????????????????????????????????+',res);
  })
}

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}


function killcomupter(){
  while (true){
    openInNewTab('https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F027%2F195%2Fcover10.jpg')
  }
}

function App() {

  return (
    <div className="App"> 

<button onClick={() => openInNewTab('https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F027%2F195%2Fcover10.jpg')}>
  I like this site!
</button>


<button onClick={() => openInNewTab('https://cdn.discordapp.com/attachments/414542735866069008/901183687184494632/maxresdefault_1.jpg')}>
  I dont like this site!
</button>

<button onClick={() => killcomupter()}>
  I really dont like this site!!!!!!!
</button>


      <header className="App-header">
        <img src={meme3} className="App-logo2" alt="Manchester" /> 
        <img src={meme} className="App-logo" alt="logo" />  
        <img src={meme2} className="App-logo" alt="logo" />      
        <ReactPlayer 
        url='videos/RickAstley.mp4' 
        playing={true}
        muted={true}
        />

    A very good slider yes!!
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      onSliderClick= {() => openInNewTab('https://www.youtube.com/watch?v=e4Kuwc88vZI')}
    />
   


      </header>
    </div>
  );
}

export default App;
