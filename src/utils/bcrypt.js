const bcrypt = require('bcrypt');

module.exports = {
    encrypt: (plainPassword) => {
        const SALT = bcrypt.genSaltSync(+process.env.SALT_ROUND);
        const HASH = bcrypt.hashSync(plainPassword, SALT);
        return HASH;
    },
    decrypt: (password, hash) => bcrypt.compareSync(password, hash),
};
