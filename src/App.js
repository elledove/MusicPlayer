import React,{useState} from 'react';
//importing styles from SAAS
import "./styles/app.scss";
import Song from './Components/Song';
import Player from './Components/Player';
import data from './util';

function App() {
  //This will return to me all the songs from the util file.
  const [songs,setSongs]=useState(data());
  //Have a current song ready to play when user opens app.
  const [currentSong,setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <h1 className="welcome"> Welcome To Elles Music Player</h1>
      <Song currentSong={currentSong}/>
      <Player/>

    </div>
  );
}

export default App;
