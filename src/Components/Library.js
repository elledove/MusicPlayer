import React from 'react';
import LibrarySong from './LibrarySong';


const Library = (props) => {
    return (  <div className="library">
        <h2>Library of Jams</h2>
        <div className="library-songs">
       { props.songs.map((song) =>  <LibrarySong song={song} />   )}

        {/* <LibrarySong /> */}

        </div>



    </div>);
}
 
export default Library;