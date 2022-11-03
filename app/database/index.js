const mysql = require("mysql");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.DB,
    port: process.env.RDS_PORT,
    timezone: 'utc',
    debug: 'true',
    timeout: 150000
})

module.exports = connection