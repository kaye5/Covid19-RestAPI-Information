const Router = require('express').Router();
const Controller = require('../controllers');
const validateKeyHandler = require('../middleware/validateKeyHandler');

Router.use('/covid', validateKeyHandler, require('./covid'));
Router.use('/news', validateKeyHandler, require('./news'));
Router.get('/countries', validateKeyHandler, Controller.getCountries);
Router.post('/login', Controller.getAccessKey);

module.exports = Router;
