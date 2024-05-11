import React, { useContext } from 'react'
import Sidbar from './components/Sidbar';
import Player from './components/Player';
import Dispaly from './components/Dispaly';
import { playerContaxt } from './context/PlayerContaxt';

const App=() =>{
  const { audioRef, track } = useContext(playerContaxt);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidbar />
        <Dispaly />
      </div>
      <Player />

      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App
