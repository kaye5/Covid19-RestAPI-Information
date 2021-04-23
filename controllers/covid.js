const CovidServices = require('../services/covid');
/**
 * @description Controller for covid world summary
 */
exports.getCovidWorldSummary = async (req, res, next) => {
  try {
    const result = await CovidServices.getCovidWorldSummary();
    res.send(result);
  } catch (err) {
    next(err);
  }
};
/**
 * @description Controller for covid country summary
 */
exports.getCovidCountrySummary = async (req, res, next) => {
  try {
    // Get country ISO2 code from parameter
    const { country } = req.params;
    const result = await CovidServices.getCovidCountrySummary(country);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
/**
 * @description Controller for covid histories
 */
exports.getCovidHistories = async (req, res, next) => {
  try {
    const { country } = req.params;
    const result = await CovidServices.getCovidHistories(country);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
