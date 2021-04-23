const _ = require('lodash');
const jwt = require('jsonwebtoken');
const CovidAPI = require('../modules/covidAPI');
const ErrorCode = require('../error');
const { isCountryCodeAvailable } = require('./utils');
const { jwtKey } = require('../config');
const { InvalidCredentials } = require('../error');
const fetchCountryFromAPI = () => CovidAPI.get('/countries');

/**
 * @description get list country code
 * @returns {Array[Object]} return array of country data
 */
exports.getListCountries = async () => {
  const { data } = await fetchCountryFromAPI();
  return data;
};
/**
 * @description Get country detail using country code
 * @param {stirng} ISO2 Country Code ex: ID, TH, MY
 */
exports.getCountryDetail = async (ISO2) => {
  if (!isCountryCodeAvailable(ISO2)) return ErrorCode.ISO2NotFound;
  const { data } = await fetchCountryFromAPI();
  const result = _.find(data, { ISO2: ISO2.toUpperCase() });
  return result;
};

/**
 * @description Create new access key
 * @returns {string} jwt token
 */
exports.getAccessKey = (user) => {
  if (!user) return InvalidCredentials;
  return jwt.sign({ user }, jwtKey);
};
/**
 * @description Validate access key
 * @param {string} token
 * @returns {boolean}
 */
exports.isAccessKeyValidate = (token) => {
  try {
    jwt.verify(token, jwtKey);
    return true;
  } catch (err) {
    return false;
  }
};
