import { useState } from 'react'
import { Link } from 'react-router-dom'

function PepehaParent() {
  const [firstParentName, setfirstParentName] = useState("")
  const [secondParentName, setsecondParentName] = useState("")
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Parents names are:', firstParentName, secondParentName)
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
              name="firstParentName"
              placeholder=" Parent's name is"
              onChange={(e) => setfirstParentName(e.target.value)}
            />
            rāua ko
            <input
              type="text"
              name="secondParentName"
              placeholder=" another Parent's name is"
              onChange={(e) => setsecondParentName(e.target.value)}
            />
          </h3>

          <h3>My parents are {firstParentName} and {secondParentName} </h3>
          {/* <Link to="/myPepeha/Ingoa"> */}
          <button type="submit">next</button>
          {/* </Link> */}
        </form>
      </div>

      <div>
        <Link to="/myPepeha/Ahau">
          <button>Previous</button>
        </Link>
      </div>
    </>
  )
}

export default PepehaParent
