const express = require('express');

const app = express.Router();

const userRouter = require('./users');

app.use('/user', userRouter);

module.exports = app;
