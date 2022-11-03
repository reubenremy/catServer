const express = require('express')
const cors = require('cors')

const User = require('./app/models/user.model')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", (req, res) => {
    res.send(User.findById(1))
})

const port = 8080 || process.env.PORT

app.listen(port, () => {
    console.log('hello world from port >>> ' + port)
})