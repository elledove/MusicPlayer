import React,{useRef,useState} from 'react';
//import React,{useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';
//With fort awesome we can import icons and pass them down as a value to icon which is a prop

const Player = (props) => {
// Ref- this will allow us to grab the html audio tag in React
const audioRef = useRef(null);

// Event handlers



const dragHandler = (e) => {
setSongInfo({...songInfo, currentTime:e.target.value})


}



const playSongHandler = () => { 
    if(props.isPlaying){
        audioRef.current.pause();
        props.setIsPlaying(!props.isPlaying)
    }else{
        audioRef.current.play();
        props.setIsPlaying(!props.isPlaying)
    }
};

const timeUpdateHander = (event) =>{
    const current = event.target.currentTime;
    //This will return duration in seconds
    const duration = event.target.duration;
    setSongInfo({...songInfo,currentTime:current, songDuration: duration})
}


const getTime = (time) => {
return(
    Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
    )

}



//State
const [songInfo,setSongInfo] = useState({
    currentTime : 0,
    songDuration:0,
})

    return (
    <div className="player">
        <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input min={0} max={songInfo.songDuration} value={songInfo.currentTime}  onChange={dragHandler} type="range"/>
            <p>{getTime(songInfo.songDuration)}</p>

        </div>
        <div className="play-control">
            <FontAwesomeIcon className="skip-back"  size ="2x" icon={faAngleLeft}/> 
            <FontAwesomeIcon onClick={playSongHandler} className="play" size ="2x" icon={faPlay}/> 
            <FontAwesomeIcon className="skip-forward" size ="2x" icon={faAngleRight}/> 


        </div>


        <audio onLoadedMetadata={timeUpdateHander}  onTimeUpdate={timeUpdateHander} ref={audioRef} src={props.currentSong.audio}></audio>


    </div>  );
}
 
export default Player;