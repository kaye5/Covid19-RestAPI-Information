const Services = require('../services/news');
/**
 * @description GET controller for get covid news
 */
exports.getNewsAboutCovid = async (req, res, next) => {
  try {
    const result = await Services.getNewsAboutCovid(req.query);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
