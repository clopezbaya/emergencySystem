const mysql = require('mysql')

class MysqlDB {
  host
  user
  pass
  db
  connection
  constructor(host, user, pass, db) {
    this.host = host
    this.user = user
    this.pass = pass
    this.db = db
    this.connection = mysql.createConnection({
      host: host,
      user: user,
      password: pass,
      database: db,
    })
  }

  start = async () => {
    await this.connection.connect()
    console.log(`DB ${this.db} connected`)
  }

  end = async () => {
    await this.connection.end()
  }
}

module.exports = MysqlDB
