const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.status(200).json({ msg: 'Hello Module 2' });
});

module.exports = routes;
