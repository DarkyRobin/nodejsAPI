const pool = require('../db');

const getAllUsers = async () => {
  const res = await pool.query('SELECT * FROM users');
  return res.rows;
}

const createUser = async (user) => {
  const { name, email } = user;
  const res = await pool.query('INSERT INTO user (name, email) VALUE ($1, $2) RETURNING *', [name, email]);
  return res.row[0];
};

module.exports = { getAllUsers, createUser };