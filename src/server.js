'use strict';

const express = require('express');
const app = express();

require('dotenv').config();

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const handle404 = require('./error-handlers/404');
const handle500 = require('./error-handlers/500');

const PORT = process.env.PORT || 3002;


app.use(logger);

app.get('/', (req, res, next)=> {
  res.status(200).send('Hello world');
  next();
});

app.get('/person', validator);

app.use(handle404);
app.use(handle500);

function start(){
  app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});
}

module.exports = { app, start };
