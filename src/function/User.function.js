const UserDb = require('../db/helper/User.helper');
const Response = require('../class/Response');
const logger = require('../../logger/logger').log('User Functions');

// Utils
const { decrypt } = require('../utils/bcrypt');
const { CreateToken } = require('../utils/jwt');

/**
 * This is where we put all the use cases for the user model
 */
module.exports = {

    /**
     * Function for creating a new user
     */
    Register: async (newUser) => {
        const response = new Response();
        try {
            logger.info('Creating a user..');
            const user = await UserDb.Create(newUser);
            response.setPayload(user);
            return response;
        } catch (error) {
            response.setFailed(500, error);
            return response;
        }
    },

    /**
     * Function for logging in this will create a token
     */
    Login: async (email, password) => {
        const response = new Response();
        logger.info(`logging in user with ${email}:${password}`);
        try {
            const userFound = await UserDb.FindOne({ email });

            if (userFound) {
                // check if password is correct
                if (!decrypt(password, userFound.password)) {
                    response.setFailed(401, `Invalid password for ${email}`);
                } else {
                    const token = await CreateToken(userFound);
                    response.setPayload({ token });
                }
            } else {
                response.setFailed(404, `Account not found: ${email}`);
            }

            return response;
        } catch (error) {
            response.setFailed(500, error);
            return response;
        }
    },

    /**
     * Function on to find one user using a query
     */
    FindOne: async (query) => {
        const response = new Response();
        try {
            const userData = await UserDb.FindOne(query);

            if (!userData) {
                response.setFailed(404, 'No user found..');
                return response;
            }

            response.setPayload(userData);
            return response;
        } catch (error) {
            response.setFailed(500, error);
            return response;
        }
    },

    /**
     * Function to find one by id
     */
    FindOneById: async (id) => {
        const response = new Response();
        try {
            const userData = await UserDb.FindOneById(id);
            if (!userData) {
                response.setFailed(404, 'No user found..');
                return response;
            }

            response.setPayload(userData);
            return response;
        } catch (error) {
            response.setFailed(500, error);
            return response;
        }
    },

    /**
     * Function to find all user using a query
     */
    FindAll: async (query) => {
        const response = new Response();
        try {
            const userData = await UserDb.FindAll(query);

            if (!userData) {
                response.setFailed(202, 'No user found..');
                return response;
            }

            response.setPayload(userData);
            return response;
        } catch (error) {
            response.setFailed(500, error);
            return response;
        }
    },
};
