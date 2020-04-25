/** local varaibles */
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: process.env.POOL_SIZE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

module.exports = pool;