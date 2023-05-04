const express = require('express')
const app = express()
const port = process.env.port||5000
const cors = require('cors')

const chefs = require("./data/chefs.json")

app.use(cors())

app.get('/', (req, res) => {
  res.send('Server API is running')
})

app.get("/chefs",(req,res)=>{
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chefs.find(n => n.id === id);
    res.send(selectedChef)
})

app.listen(port, () => {
  console.log(`Server API is listening on port ${port}`)
})