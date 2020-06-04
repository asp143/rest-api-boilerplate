const Rx = require('rxjs');
const User = require('../function/User.function');

/**
 * Add use cases
 */
module.exports = {
    /**
     *  Create a new document
     */
    Create: (req, res) => {
        Rx
            .from(User.Register(req.body))
            .subscribe(
                (result) => {
                    res.status(result.status).json(result);
                },
                (error) => {
                    res.status(500).json(error);
                },
            );
    },

    /**
     * Find one user
     */
    FindOne: (req, res) => {
        Rx
            .from(User.FindOne(req.body))
            .subscribe(
                (result) => {
                    res.status(result.status).json(result);
                },
                (error) => {
                    res.status(500).json(error);
                },
            );
    },

    /**
     * Find one user
     */
    FindOneById: (req, res) => {
        Rx
            .from(User.FindOne(req.params.id))
            .subscribe(
                (result) => {
                    res.status(result.status).json(result);
                },
                (error) => {
                    res.status(500).json(error);
                },
            );
    },

    /**
     * Find All user
     */
    FindAll: (req, res) => {
        Rx
            .from(User.FindAll(req.query))
            .subscribe(
                (result) => {
                    res.status(result.status).json(result);
                },
                (error) => {
                    res.status(500).json(error);
                },
            );
    },

    /**
     * Login
     */
    Login: (req, res) => {
        const { email, password } = req.body;

        Rx
            .from(User.Login(email, password))
            .subscribe(
                (result) => {
                    res.status(result.status).json(result);
                },
                (error) => {
                    res.status(500).json(error);
                },
            );
    },
};
