const express = require("express")
const app = express()
const path = require('path')
const hostname = '127.0.0.1'
const port = 3000

const userroute = require('./routes/notesRouter')

// set the view engine to ejs
app.set('view engine', 'ejs');

//built-in middleware 
const staticPath = path.join(__dirname, './public')
app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about', {
        name: "about"
    })
})

app.use('/', userroute)

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
