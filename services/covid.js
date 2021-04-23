const _ = require('lodash');
const ErrorCode = require('../error');
const covidAPI = require('../modules/covidAPI');
const { calculatePercantage, isCountryCodeAvailable } = require('./utils');

/**
 * @returns {Promise} axios promise
 */
const FecthCovidSummaryFromAPI = () => {
  return covidAPI.get('/summary');
};
/**
 * @description get covid world summary
 * @returns {object} data of covid summary
 */
exports.getCovidWorldSummary = async () => {
  const { data } = await FecthCovidSummaryFromAPI();
  return data.Global;
};
/**
 * @description Get summary of country specific
 * @param {stirng} ISO2 Country Code ex: ID, TH, MY
 */
exports.getCovidCountrySummary = async (ISO2 = '') => {
  // Check if country code is correct
  if (!isCountryCodeAvailable(ISO2)) {
    return ErrorCode.ISO2NotFound;
  }
  const { data } = await FecthCovidSummaryFromAPI();
  // Find all country summary data using country code
  const result = _.find(data.Countries, { CountryCode: ISO2.toUpperCase() });
  // Check if data not avail
  if (result.length === 0) return ErrorCode.DataNotFound;
  // Use overall summary data to calculate percentage comparison
  const Global = data.Global;
  const NewConfirmed = calculatePercantage(Global.NewConfirmed, result.NewConfirmed);
  const NewDeaths = calculatePercantage(Global.NewDeaths, result.NewDeaths);
  const TotalRecovered = calculatePercantage(Global.TotalRecovered, result.TotalRecovered);
  const TotalDeaths = calculatePercantage(Global.TotalDeaths, result.TotalDeaths);
  const NewRecovered = calculatePercantage(Global.NewRecovered, result.NewRecovered);
  const TotalConfirmed = calculatePercantage(Global.TotalConfirmed, result.TotalConfirmed);
  result.percentageComparison = {
    NewConfirmed,
    NewDeaths,
    TotalRecovered,
    TotalDeaths,
    NewRecovered,
    TotalConfirmed,
  };
  // Sanitize data
  delete result.ID
  return result;
};

/**
 * @description get histories of covid data from day started
 * @param {string} countrySlug country slug id get from /countries or /summaries
 * @returns {Array} return array of covid history
 */
exports.getCovidHistories = async (countrySlug) => {
  const { data } = await covidAPI.get(`/total/dayone/country/${countrySlug}`);
  // Saniztize result , delete unused key and return as list
  return data.map((value) => ({
    Confirmed: value.Confirmed,
    Deaths: value.Deaths,
    Recovered: value.Recovered,
    Active: value.Active,
    Date: value.Date,
  }));
};
