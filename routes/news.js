const Router = require('express').Router();
const Controller = require('../controllers/news');

Router.get('/', Controller.getNewsAboutCovid);

module.exports = Router;
