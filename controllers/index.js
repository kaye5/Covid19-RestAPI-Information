const Services = require('../services');
/**
 * @description GET get list countries controller
 */
exports.getCountries = async (req, res, next) => {
  try {
    const { code } = req.query;
    let result;
    if (!code) result = await Services.getListCountries();
    else result = await Services.getCountryDetail(code);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @description POST create new access key
 */
exports.getAccessKey = (req, res, next) => {
  try {
    const { user } = req.body;
    const token = Services.getAccessKey(user);
    res.send(token);
  } catch (error) {
    next(error);
  }
};
