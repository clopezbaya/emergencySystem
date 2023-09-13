const mysql = require('mysql2/promise')

class MysqlDB {
  connection
  db
  host
  user
  pass
  constructor(host, user, pass, db) {
    this.db = db
    this.host = host
    this.user = user
    this.pass = pass
  }

  start = async () => {
    this.connection = mysql.createPool({
      host: this.host,
      user: this.user,
      password: this.pass,
      database: this.db,
    })
    console.log(`DB ${this.db} connected`)
  }

  end = async () => {
    await this.connection.end()
  }
}

module.exports = MysqlDB
