const express = require('express')
const cors = require('cors')

const User = require('./app/models/user.model')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", async (req, res) => {
    res.send("Welcome to cat app server :) ")
})

app.post("/signup", async (req, res) => {
    const newUser = new User(req.body)

    try {
        const created_response = await newUser.create()
        res.send({
            status: 1,
            user: newUser,
            db_response: created_response,
            message: "user successfully created"
        })
    } catch (error) {
        res.send({
            status: 0,
            user: newUser,
            db_response: null,
            message: "Error creating user"
        })
    }
})

app.post("/login", async (req, res) => {
    const existingUser = await User.findByUsername(req.body.username)
    res.send(existingUser)
})

const port = 8080 || process.env.PORT

app.listen(port, () => {
    console.log('hello world from port >>> ' + port)
})