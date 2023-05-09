import { Link } from 'react-router-dom'
import React from 'react'

function PepehaGreeting() {
  return (
    <>
      <div>
        <h1>YOUR PEPEHA</h1>
      </div>

      <div>
        <h3>Tēnā koutou katoa</h3>
        <h3>Greetings all</h3>
      </div>

      <div>
        <Link to="/myPepeha/Maaunga">
          <button>Next</button>
        </Link>
      </div>
    </>
  )
}

export default PepehaGreeting
