const mysql = require('mysql');
const token = require('./token');

const connection = mysql.createConnection(token);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to DB!');
});

module.exports = connection;