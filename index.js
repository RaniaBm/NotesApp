const express = require("express")
const app = express()
const path = require('path')

const hostname = '127.0.0.1'
const port = 3000

const userroute = require('./routes/notesRouter')

app.set('view engine', 'ejs');

//built-in middleware 
const staticPath = path.join(__dirname, './public')
app.use(express.static(staticPath))

app.use('/', userroute)

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})