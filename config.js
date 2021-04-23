require('dotenv').config();

module.exports = {
  covid19Endpoint: 'https://api.covid19api.com',
  newsApiEndpoint: {
    headlines: 'https://newsapi.org/v2',
    token: process.env.NEWSAPI_KEY,
  },
  port: process.env.PORT || 3000,
  jwtKey: process.env.JWT_KEY,
};
