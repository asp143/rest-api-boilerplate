/* eslint-disable no-console */
const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

db.once('open', () => {
    console.log('db connected!');
});

db.on('error', () => {
    console.log('ERROR CONNECTING ON DB!');
});
