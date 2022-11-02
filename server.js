const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use("/", (req, res) => {
    res.send('Hello World 2')
})

const port = 8080 || process.env.PORT

app.listen(port, () => {
    console.log('hello world from port >>> ' + port)
})