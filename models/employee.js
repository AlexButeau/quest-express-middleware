const db = require('../db.js');

const getEmployees = async () => {
  return db.query('SELECT * FROM employee');
};

module.exports = { getEmployees };
