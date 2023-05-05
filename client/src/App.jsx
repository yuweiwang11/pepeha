import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import MainPage from './MainPage'
import PepehaGreeting from './PepehaGreeting'
import PepehaMaaunga from './PepehaMaaunga'


function App() {
  
  return (
    <Routes>
      <Route>
        <Route path="/" element={<MainPage/>} />
        <Route path="/myPepeha" element={<PepehaGreeting/>} />


      </Route>

    </Routes>
  )
}

export default App
