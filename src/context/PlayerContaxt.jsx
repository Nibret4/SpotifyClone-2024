import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const playerContaxt = createContext()
const PlayerContaxtProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef()
  const seekBar = useRef()
  
  const [track, setTrack] = useState(songsData[0]);
  const [playstatus, setPlayStatus] = useState(false)
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true)
  }
  const pause = () => {
    audioRef.current.pause();
      setPlayStatus(false);
  }

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60)
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60)
          }
        })
    }
  },1000)
},[audioRef])

   
    const contextValue = {
      audioRef,
      seekBg,
      seekBar,
      track,
      setTrack,
      playstatus,
      setPlayStatus,
      time,
      setTime,
      play,
      pause,
    };
    return (
      <playerContaxt.Provider value={contextValue}>
        {props.children}
      </playerContaxt.Provider>
    );
}
export default PlayerContaxtProvider;