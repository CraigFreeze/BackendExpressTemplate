const routes = require('express').Router();
const controller = require('../controllers/testController.js');

routes.get('/', controller.test);

module.exports = routes;
