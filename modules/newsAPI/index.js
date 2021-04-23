const Axios = require('axios');
const qs = require('querystring');
const config = require('../../config');

const api = Axios.create({
  baseURL: config.newsApiEndpoint.headlines,
});
/**
 * @description create GET request to NewsAPI using axios
 * @param {string} url
 * @param {object} query
 * @returns {Promise} axios result
 */
exports.NewsAPIGET = (url, query) => {
  const parsedQuery = qs.stringify({
    ...query,
    apiKey: config.newsApiEndpoint.token,
  });
  return api.get(`${url}?${parsedQuery}`);
};
