import express from "express";
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3005

// endpoint
app.get("/", (req,res) => {
  res.send("message from server index.js")
})

app.post("/myPepeha", (req, res) => {
  const myPepehaInfo = req.body.pepehaDescription
  console.log("your pepeha info: ", myPepehaInfo)
  res.json({pepehaDescription: `you wrote: ${myPepehaInfo}`})
})

app.listen(port, ()=> {
  console.log("listening on port", port)
})