const winston = require('winston');

/**
 * Winston logger will put logs in error.log file in root directory as well as log
 * everything in console with timestamp of each entry and different colors for
 * different type of log.
 * There are 6 levels depending on the type of log:
 * error
 * warn
 * info
 * verbose
 * debug
 * silly
 *
 * Require the logger and access these levels as Logger.warn() or Logger.info()
 */

const log = function (label) {
    return winston.createLogger({
        level: process.env.LOG_LEVEL,
        transports: [
            new winston.transports.File({ filename: 'error.log' }),
            new winston.transports.Console({
                format: winston.format.combine(
                    winston.format.colorize(),
                    winston.format.simple(),
                    winston.format.timestamp({
                        format: 'DD-MM-YYYY HH:mm:ss.SSS',
                    }),
                    winston.format.label({
                        label, // 'test-label'
                    }),
                    winston.format.printf((info) => `[${info.timestamp}] [${info.label}] [${info.level}] : ${info.message}`),
                ),
                silent: process.env.NODE_ENV === 'test',
            }),
        ],
    });
};


const httpLoggerConfig = {
    winstonInstance: log('http'),
    level: 'info',
    expressFormat: true,
    transports: [
        new winston.transports.File({ filename: 'error.log' }),
        new winston.transports.Console({
            json: true,
            colorize: true,
        }),
    ],
    meta: true,
    responseWhitelist: ['statusCode', 'body'],
    msg: 'HTTP {{req.method}} {{req.url}}',
    colorize: true,
};

module.exports = {
    log,
    httpLoggerConfig,
};
