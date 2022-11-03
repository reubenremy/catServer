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
            await db.query('INSERT INTO user_tbl SET ?', this)
        } catch (error) {
            console.log(error)
        }
    }

    static async findById(id){
        return await new Promise((resolve, reject) => {
            db.query(`SELECT * FROM user_tbl WHERE id=${id};`, (err, res) => {
                if (err) reject(err)
                if (res.length) {
                    resolve(res[0])
                }
            })
        })
    }
}

module.exports = User