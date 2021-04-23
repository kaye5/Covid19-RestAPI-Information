const Router = require('express').Router();
const CovidController = require('../controllers/covid');

Router.get('/summaries', CovidController.getCovidWorldSummary);
Router.get('/summaries/:country', CovidController.getCovidCountrySummary);
Router.get('/histories/:country', CovidController.getCovidHistories);

module.exports = Router;
