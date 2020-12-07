const middlewareRouter = require('express').Router();

middlewareRouter.use(
  '/',
  (req, res, next) => {
    console.log('Hello middleware');
    next();
  },
  (req, res) => {
    res.send('Hello world');
  }
);

module.exports = middlewareRouter;
