const employeeRouter = require('express').Router();
const { handleGetEmployees } = require('../controllers/employee.js');

employeeRouter.get('/', handleGetEmployees);
// employeeRouter.delete('/:id', handleOneMovieDeletion);

module.exports = employeeRouter;
