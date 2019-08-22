/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const Nodemon = require('gulp-nodemon');

gulp.task('nodemon', () => {
    const nodeArgs = [];
    if (process.env.DEBUGGER) {
        nodeArgs.push('--inspect');
    }

    Nodemon({
        script: 'src/bin/www',
        ignore: [
            'node_modules/',
            'test/',
        ],
        nodeArgs,
    }).on('restart', (files) => {
        // eslint-disable-next-line no-console
        console.log('Change detected:', files);
    });
});
