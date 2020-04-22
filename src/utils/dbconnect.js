/* eslint-disable no-console */
const mongoose = require('mongoose');
const logger = require('../../logger/logger').log('MongoDb');

const db = mongoose.connection;

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

db.once('open', () => {
    logger.info('Connected to db!');
});

db.on('error', () => {
    logger.error('Error connecting to db');
});
