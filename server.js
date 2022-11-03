const express = require('express')
const cors = require('cors')

const db = require('./app/database')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))

const testDB = async () => {
    const response = await new Promise((resolve, reject) => {
        db.query('show tables;', async(err, res) => {
            console.log(res, err)
            if (err) reject(err)
            resolve(res)
        })
    })
    console.log("response is", response)
}

testDB()

app.use("/", (req, res) => {
    res.send('Hello World 2')
})

const port = 8080 || process.env.PORT

app.listen(port, () => {
    console.log('hello world from port >>> ' + port)
})