import React from 'react';


const LibrarySong = (props) => {
    return ( <div className="library-song">
      <img alt={props.song.name} src={props.song.cover}></img>
            <h3>{props.song.name}</h3>
            <h4>{props.song.artist}</h4>


    </div> );
}
 
export default LibrarySong;