import React from 'react';
//importing styles from SAAS
import "./styles/app.scss";
import Song from './Components/Song';
import Player from './Components/Player';

function App() {
  return (
    <div className="App">
      <h1 className="welcome"> Welcome To Elles Music Player</h1>
      <Song/>
      <Player/>

    </div>
  );
}

export default App;
