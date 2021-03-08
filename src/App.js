import React, {useState} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import util from './util'
import './Styles/app.scss'


function App() {

  const [songs, setSongs] = useState(util());
  const [currentSong, setCurrentSong] = useState (songs[0]);
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song  currentSong={currentSong}/>
      <Player 
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong}
       />
    </div>
  );
}

export default App;
