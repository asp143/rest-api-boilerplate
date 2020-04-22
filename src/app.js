const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const expressLogger = require('express-winston');

const logger = require('../logger/logger');

require('./utils/dbconnect');
require('./utils/passport');

const v1 = require('./routes/v1');

const app = express();

app.use(expressLogger.logger(logger.httpLoggerConfig));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1', v1);

module.exports = app;
