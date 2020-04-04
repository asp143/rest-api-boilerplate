const passport = require('passport');
const jwtStrategy = require('passport-jwt');
const userModel = require('../db/helper/User.helper');

const options = {};

options.jwtFromRequest = jwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET;

passport
    .use(new jwtStrategy.Strategy(options, async (jwtPayload, done) => {
        userModel
            .FindOne({ email: jwtPayload.email })
            .then((result) => {
                if (result) {
                    return done(null, result);
                }
                return done(null, false);
            })
            .catch((err) => done(err, false));
    }));

passport
    .serializeUser((user, done) => {
        done(null, user);
    });

passport
    .deserializeUser((user, done) => {
        done(null, user);
    });
