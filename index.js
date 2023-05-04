const express = require('express')
const app = express()
const port = process.env.port||5000

const chefs = require("./data/chefs.json")

app.get('/', (req, res) => {
  res.send('Server API is running')
})

app.get("/chefs",(req,res)=>{
    res.send(chefs)
})

app.listen(port, () => {
  console.log(`Server API is listening on port ${port}`)
})