const express = require('express')
const app = express()
const port = 3000
const userRoutes = require('./routes/userRoutes')
var cors = require('cors')

const mongoose = require('mongoose')

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.use(userRoutes)

async function connectDB () {
    await mongoose.connect('mongodb://localhost:27017/', {
        dbName: 'UsersDB',
    })
}

connectDB().catch((err) => console.log(err))

app.listen(port, () => {
    console.log(`Server listens to port: ${port}`)
})