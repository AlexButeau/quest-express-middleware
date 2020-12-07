const { getEmployees } = require('../models/employee.js');

module.exports.handleGetEmployees = async (req, res) => {
  const rawData = await getEmployees();
  res.json(rawData);
};
