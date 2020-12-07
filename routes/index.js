// const thingsRoutes = require('./things');
const employeeRouter = require('./employee.js');
const middlewareRouter = require('./middleware.js');

// eslint-disable-next-line
module.exports = (app) => {
  app.use('/superMiddleware', middlewareRouter);
  app.use('/employees', employeeRouter);
};
