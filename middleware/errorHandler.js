/**
 * @description error handler middleware
 */
const errHandler = (err, req, res, next) => {
  if (err.response) {
    console.log(err.response.data, err.response.status);
    return res.sendStatus(err.response.status);
  }
  console.log(err.message);
  res.status(500).send('something went wrong.');
  return next();
};
module.exports = errHandler;
