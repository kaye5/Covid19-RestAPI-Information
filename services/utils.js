const _ = require('lodash');
const CountryData = require('../data/country');
/**
 * @description calculate percentage
 * @param {nubmer} total
 * @param {number} comparison
 * @returns {number} percentage
 */
exports.calculatePercantage = (total, comparison) => {
  return parseFloat(((comparison / total) * 100).toPrecision(3));
};

/**
 * @description Verify coutnry code avail
 * @param {string} ISO2 Country Code ex: ID, TH, MY
 */
exports.isCountryCodeAvailable = (ISO2 = '') => {
  return Boolean(
    _.find(CountryData, {
      code: ISO2.toUpperCase(),
    })
  );
};
