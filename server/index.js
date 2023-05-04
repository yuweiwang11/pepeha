import express from "express";
import cors from "cors"

const app = express()

app.use(cors())

const port = process.env.PORT || 3005

// endpoint
app.get("/", (req,res) => {
  res.send("message from server index.js")
})

app.listen(port, ()=> {
  console.log("listening on port", port)
})