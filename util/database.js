const mysql = require('mysql2');

const pool = mysql.createPool({
  host     : process.env.DB_HOST || 'localhost',
  user     : process.env.DB_USERNAME ||'root',
  password : process.env.DB_PASSWORD || 'root',
  database : 'db_flashback',
  port: process.env.DB_PORT || 8889
})

module.exports = pool.promise();