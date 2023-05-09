import { useState } from 'react'
import { Link } from 'react-router-dom'

import './PepehaMaaunga.css'


function PepehaMaaunga() {
  const [maaungaName, setMaaungaName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('maaunga name is:', maaungaName)
  }

  return (
    <>
      <div>
        <h1>YOUR PEPEHA</h1>
      </div>

      <div>
        <form onSubmit={onSubmit}>
          <h3>
            Ko
            <input
              type="text"
              name="yourMaaunga"
              placeholder=" The mountain that I affiliate to is"
              onChange={(e) => setMaaungaName(e.target.value)}
            />
            te māunga
          </h3>

          <h3>The mountain that I affiliate to is {maaungaName}</h3>
          <Link to="/myPepeha/Water">
            <button type="submit">next</button>
          </Link>
        </form>
      </div>

      <div>
        <Link to="/myPepeha/Greetings">
          <button>Previous</button>
        </Link>
      </div>
    </>
  )
}

export default PepehaMaaunga
