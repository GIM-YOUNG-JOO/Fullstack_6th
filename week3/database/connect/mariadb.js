const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Programmers',
    port: 3307,
    connectionLimit: 5
  });

module.exports = pool;