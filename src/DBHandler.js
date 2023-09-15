const mysql = require('mysql2/promise')

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'yoiner12345',
  database: 'emergencysystem',
})
console.log('DB connected')

module.exports = connection
