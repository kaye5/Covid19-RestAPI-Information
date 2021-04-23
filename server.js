const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(require('morgan')('common'));

app.use('/api', require('./routes'));

app.use('*', (req, res, next) => {
  res.sendStatus(404);
});

app.use(require('./middleware/errorHandler'));

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`SERVER RUNNING ON PORT : ${config.port}`);
});
