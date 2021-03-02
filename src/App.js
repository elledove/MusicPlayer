import React,{useState} from 'react';
//importing styles from SAAS
import "./styles/app.scss";
import Song from './Components/Song';
import Player from './Components/Player';
import data from './util';
import Library from './Components/Library';

function App() {
  //State1-This will return to me all the songs from the util file.
  const [songs,setSongs]=useState(data());
  //State2-Have a current song ready to play when user opens app.
  const [currentSong,setCurrentSong] = useState(songs[0]);
  //State3- This will return true/false if the song is currently playing.
  const[isPlaying,setIsPlaying]=useState(false);

  return (
    <div className="App">
      <h1 className="welcome"> Welcome To Elles Music Player</h1>
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
      <Library songs={songs}/>

    </div>
  );
}

export default App;
