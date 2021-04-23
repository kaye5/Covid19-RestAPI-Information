const { ISO2NotFound } = require('../error');
const { NewsAPIGET } = require('../modules/newsAPI');
const { isCountryCodeAvailable } = require('./utils');
/**
 * @description Get news about covid
 * @param {object} query request query
 * @returns {Array} list of news
 */
exports.getNewsAboutCovid = async (query = {}) => {
  // Sanitize request query
  const sanitizedQuery = {
    // search query
    q: 'covid',
    page: query.page || 1,
    // max page to show
    pageSize: 10,
  };
  if (query.country) {
    if (!isCountryCodeAvailable(query.country)) return ISO2NotFound;
    sanitizedQuery.country = query.country;
  }

  const { data } = await NewsAPIGET('/top-headlines', sanitizedQuery);
  return { articles: data.articles, totalResults: data.totalResults };
};
