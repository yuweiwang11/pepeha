import { useState } from 'react'
import { Link } from 'react-router-dom'

function Pepehafinal() {


  return (
    <>
      <div>
        <h1>YOUR PEPEHA</h1>
      </div>

      <h3></h3>

      <div>

          {/* <Link to="/myPepeha/Water"> */}
          <button type="submit">Print</button>
          {/* </Link> */}
      
      </div>

      <div>
        <Link to="/myPepeha/Ingoa">
          <button>Previous</button>
        </Link>
      </div>
    </>
  )
}

export default Pepehafinal
