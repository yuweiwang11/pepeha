import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <>
      <div>
        <h1>PEPEHA</h1>
      </div>
      <div>
        <img src="/public/mt1.png" alt="pepeha img" width="500" height="500" />
        {/* link to pepeha intro */}
      </div>
      <div>
        <Link to="/myPepeha/Greetings">
          <button>CREATE PEPEHA</button>
          {/* link to pepeha creation */}
        </Link>
      </div>
    </>
  )
}

export default MainPage
