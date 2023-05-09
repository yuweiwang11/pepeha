import { useState } from 'react'
import { Link } from 'react-router-dom'

function PepehaAhau() {
  const [ahauName, setahauName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('my ahau is:', ahauName)
  }

  return (
    <>
      <div>
        <h1>YOUR PEPEHA</h1>
      </div>

      <div>
        <form onSubmit={onSubmit}>
          <h3>
            Nō
            <input
              type="text"
              name="yourAhau"
              placeholder=" I am from"
              onChange={(e) => setahauName(e.target.value)}
            />
            ahau
          </h3>

          <h3>I am from {ahauName}</h3>
          <Link to="/myPepeha/Parent">
          <button type="submit">next</button>
          </Link>
        </form>
      </div>

      <div>
        <Link to="/myPepeha/Water">
          <button>Previous</button>
        </Link>
      </div>
    </>
  )
}

export default PepehaAhau
