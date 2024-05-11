import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DispayAlbum from './DispayAlbum'

const Dispaly = () => {
  return (
      <div className='w-[100%] m-2 px-6 pt-4 roundeed bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
          <Routes>
              <Route path='/' element={<DisplayHome/> } />
              <Route path='/album/:id' element={<DispayAlbum/> } />
          </Routes>
      
    </div>
  )
}

export default Dispaly
