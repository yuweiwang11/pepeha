import { useState } from "react"

function PepehaMaaunga() {
  const [maaungaName, setMaaungaName] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("maaunga name is", maaungaName)
  }
  

  return (
    <>
      <div>
        <h1>YOUR PEPEHA</h1>
      </div>
      <div>
        <h3>Ko 
          <form onSubmit={onSubmit}>
            <input 
              type="text"
              name="yourMaaunga"
              placeholder="The mountain that I affiliate to is"
              onChange={(e) => setMaaungaName(e.target.value)}
            />
            <input type = "submit" value="save maaunga"/>

          </form>
          ___________ te māunga</h3>
        <h3>Hello Everybody</h3>
      </div>


      
    </>
  )
}

export default PepehaMaaunga