// db.js
import mysql from 'mysql2/promise'

// Create a connection to the database
const mysqldb = mysql.createPool({
  host: 'localhost',
  user: 'root',     
  password: 'Barath@1974', 
  database: 'moneytrackerapp',
  waitForConnections: true, 
  connectionLimit: 10,     
  queueLimit: 0     
});


export default mysqldb;
