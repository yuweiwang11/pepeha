import { useState } from 'react'
import { Link } from 'react-router-dom'

function PepehaIngoa() {
  const [ingoaName, setIngoaName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('My ingoa is:', ingoaName)
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
              name="yourIngoa"
              placeholder=" I am from"
              onChange={(e) => setIngoaName(e.target.value)}
            />
            tōku ingoa
          </h3>

          <h3>My name is </h3>
          {/* <Link to="/myPepeha/Water"> */}
          <button type="submit">next</button>
          {/* </Link> */}
        </form>
      </div>

      <div>
        <Link to="/myPepeha/Maaunga">
          <button>Previous</button>
        </Link>
      </div>
    </>
  )
}

export default PepehaIngoa
