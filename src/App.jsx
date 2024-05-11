import React from 'react'
import Sidbar from './components/Sidbar';
import Player from './components/Player';
import Dispaly from './components/Dispaly';

function App() {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidbar />
        <Dispaly/>
      </div>
      <Player/>
    </div>
  );
}

export default App
