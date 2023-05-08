import { useState } from 'react'
import { Link } from 'react-router-dom'

function PepehaWater() {
  const [waterName, setWaterName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('water name is:', waterName)
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
              name="yourWater"
              placeholder=" The mountain that I affiliate to is"
              onChange={(e) => setWaterName(e.target.value)}
            />
            te awa/roto/moana
          </h3>

          <h3>The river/lake/sea that I affiliate to is </h3>
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

export default PepehaWater
