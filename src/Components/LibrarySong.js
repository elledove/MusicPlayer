import React from 'react';


const LibrarySong = (props) => {


const songSelectHandler = () =>{
  const selectedSong = props.songs.filter((state) => state.id === props.id) ;
      props.setCurrentSong(selectedSong[0]);


}


    return ( 
    <div onClick={songSelectHandler} className="library-song">
      <img alt={props.song.name} src={props.song.cover}></img>
              <div className="song-description">
            <h3>{props.song.name}</h3>
            <h4>{props.song.artist}</h4>
            </div>


    </div> );
}
 
export default LibrarySong;