const { InvalidAccessKey } = require('../error');
const Services = require('../services');
/**
 * @description Send error code 403
 * @param {Express} res express response function
 */
const sendInvalidKey = (res) => {
  res.status(401).send(InvalidAccessKey);
};
/**
 * @description Validate access key provided
 */
const validateKeyHandler = (req, res, next) => {
  try {
    const bearerToken = req.headers['authorization'];
    if (!bearerToken) return sendInvalidKey(res);
    const token = bearerToken.split(' ')[1]
    const isValidate = Services.isAccessKeyValidate(token);
    if (isValidate) return next();
    sendInvalidKey(res);
  } catch (error) {
    next(error);
  }
};

module.exports = validateKeyHandler;
