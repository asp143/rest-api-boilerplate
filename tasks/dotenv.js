/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp');
const dotenv = require('dotenv');

gulp.task('dotenv', (done) => {
    dotenv.config();
    done();
});
