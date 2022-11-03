const db = require('../database')



class User {
    constructor(entry) {
        this.username = entry.username
        this.password = entry.password
        this.email = entry.email
        this.healthbar_status = entry.healthbar_status
        this.total_coins = entry.total_coins
    }

    static createTable() {
        db.query(`CREATE TABLE user_tbl (
            id int NOT NULL AUTO_INCREMENT,
            username varchar(55),
            password varchar(55),
            email varchar(55),
            healthbar_status int,
            total_coins int,
            PRIMARY KEY (id)
        );`)
    }

    async create(){
        try {
            return await new Promise((resolve, reject) => {
                db.query('INSERT INTO user_tbl SET ?', this, (err, res) => {
                    if (err) reject(err)
                    resolve(res)
                })
            })
        } catch (error) {
            return error
        }
    }

    static async findByUsername(username){
        return await new Promise((resolve, reject) => {
            db.query(`SELECT * FROM user_tbl WHERE username="${username}";`, (err, res) => {
                if (err) reject(err)
                if (!res.length) {
                    resolve({
                        status: 0,
                        user: null,
                        message: "account doesn't exist"
                    })
                }
                resolve({
                    status: 1,
                    user: res[0],
                    message:`Welcome back ${username}` 
                })
            })
        })
    }
}

module.exports = User