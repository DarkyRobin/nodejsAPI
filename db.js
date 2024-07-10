const { Pool } = require('pg');

const pool = new Pool({
  user: 'dbuser',
  host: 'localhost',
  database: 'nodejsapi',
  password: 'P@ssw0rd1',
  port: 5432,
});

module.exports = pool