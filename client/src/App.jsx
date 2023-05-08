import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import MainPage from './MainPage'
import PepehaGreeting from './PepehaGreeting'
import PepehaMaaunga from './PepehaMaaunga'
import PepehaWater from './PepehaWater'
import HomeNav from './HomeNav'

function App() {
  return (
    <>
      {<HomeNav />}

      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/myPepeha/Greetings" element={<PepehaGreeting />} />
          <Route path="/myPepeha/Maaunga" element={<PepehaMaaunga />} />
          <Route path="/myPepeha/Water" element={<PepehaWater />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
