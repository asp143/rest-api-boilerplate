const jwt = require('jsonwebtoken');

module.exports = {
    CreateToken: (userData) => {
        const signOptions = {
            // eslint-disable-next-line no-underscore-dangle
            _id: userData._id,
            email: userData.email,
        };

        const token = jwt
            .sign(signOptions, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRES_IN });
        return token;
    },
    VerifyToken: (token) => {
        const isVerified = jwt.verify(token, process.env.JWT_SECRET);
        return isVerified;
    },
    DecodeToken: (token) => {
        const decoded = jwt.decode(token, process.env.JWT_SECRET);
        return decoded;
    },
};
