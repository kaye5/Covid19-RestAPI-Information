const Axios = require('axios');
const config = require('../../config');

const instances = Axios.create({
  baseURL: config.covid19Endpoint,
});

module.exports = instances;
