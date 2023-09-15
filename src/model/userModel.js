const db = require('../DBHandler')

class userModel {
  async find() {
    const [rows] = await db.query('SELECT * FROM users').then()
    return rows
  }
  async findById(userId) {
    const [rows] = await db
      .query('SELECT * FROM users WHERE idusers = ?', [userId])
      .then()
    return rows
  }
  async add(user) {
    const [rows] = await db
      .query(
        'INSERT INTO users(name, speciality, username, password) VALUES (?, ?, ?, ?)',
        [user.name, user.speciality, user.username, user.password]
      )
      .then()
    return rows
  }
}

module.exports = userModel
