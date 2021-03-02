import React from 'react';


const LibrarySong = (props) => {
    return ( <div className="library-song">
      <img alt={props.currentSong.name} src={props.currentSong.cover}></img>
            <h3>{props.currentSong.name}</h3>
            <h4>{props.currentSong.artist}</h4>


    </div> );
}
 
export default LibrarySong;