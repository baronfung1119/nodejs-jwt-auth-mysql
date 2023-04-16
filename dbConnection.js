require('dotenv').config();

var mysql = require('mysql');
var conn = mysql.createConnection({
    host: process.env.DB_HOST, // Replace with your host name
    user: process.env.DB_USER,      // Replace with your database username
    password: process.env.DB_PASSWORD,      // Replace with your database password
    database: process.env.DB_NAME // Replace with your database Name
}); 
 
conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});

module.exports = conn;