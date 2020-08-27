const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()
const PORT = 8000

//logging middleware
app.use(morgan('dev'))

//body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
 })

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
} )