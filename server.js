const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const PORT = '3000'
const HOST = '127.0.0.1'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine", "html")

app.get('/', (req, res) => {
  res.render("index")
})

app.listen(PORT, () => {
  console.log("server up")
})
