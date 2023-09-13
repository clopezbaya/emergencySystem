const db = require('../DBHandler')

class userModel {
  static find = async () => {
    const [rows] = await db
      .query('SELECT * FROM users')
      .catch((err) => console.log(err))
    console.log(rows)
    return rows
  }
}

module.exports = userModel
