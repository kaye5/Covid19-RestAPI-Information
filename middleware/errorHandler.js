/**
 * @description error handler middleware
 */
const errHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).send('something went wrong.');
  return next();
};
module.exports = errHandler;
