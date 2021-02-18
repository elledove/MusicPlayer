import React,{useRef,useState} from 'react';
//import React,{useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';
//With fort awesome we can import icons and pass them down as a value to icon which is a prop

const Player = (props) => {
// Ref- this will allow us to grab the html audio tag in React
const audioRef = useRef(null);

// Event handlers
const playSongHandler = () => { 
    if(props.isPlaying){
        audioRef.current.pause();
        props.setIsPlaying(!props.isPlaying)
    }else{
        audioRef.current.play();
        props.setIsPlaying(!props.isPlaying)
    }
};

const timeUpdateHander = () =>{


}
//State
const [songInfo,setSongInfo] = useState({
    currentTime : null,
    songDuration:null
})

    return (
    <div className="player">
        <div className="time-control">
            <p>Start Time</p>
            <input type="range"/>
            <p>End Time</p>

        </div>
        <div className="play-control">
            <FontAwesomeIcon className="skip-back"  size ="2x" icon={faAngleLeft}/> 
            <FontAwesomeIcon onClick={playSongHandler} className="play" size ="2x" icon={faPlay}/> 
            <FontAwesomeIcon className="skip-forward" size ="2x" icon={faAngleRight}/> 


        </div>


        <audio onTimeUpdate ref={audioRef} src={props.currentSong.audio}></audio>


    </div>  );
}
 
export default Player;