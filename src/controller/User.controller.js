const Rx = require('rxjs');
const { flatMap, takeWhile } = require('rxjs/operators');
const UserDb = require('../model/User.model');
const Response = require('../class/Response');
const { decrypt } = require('../utils/bcrypt');
const { CreateToken } = require('../utils/jwt');

/**
 * Add use cases
 */
module.exports = {
    /**
     *  Create a new document
     */
    Create: (req, res) => {
        const response = new Response();
        Rx
            .from(UserDb.Create(req.body))
            .subscribe(
                (result) => {
                    response.setPayload(result);
                },
                (err) => {
                    response.setStatus(500).setSuccess(false).setPayload(err);
                    res.status(response.status).json(response);
                },
                () => {
                    res.status(response.status).json(response.toJson());
                },
            );
    },
    /**
     * Find one user
     */
    FindOne: (req, res) => {
        const response = new Response();
        Rx
            .from(UserDb.FindOne(req.query))
            .subscribe(
                (result) => {
                    response.setPayload(result);
                },
                (err) => {
                    response.setStatus(500).setSuccess(false).setPayload(err);
                    res.status(response.status).json(response);
                },
                () => {
                    res.status(response.status).json(response.toJson());
                },
            );
    },
    /**
     * Find one user
     */
    FindOneById: (req, res) => {
        const response = new Response();
        Rx
            .from(UserDb.FindOneById(req.params.id))
            .subscribe(
                (result) => {
                    response.setPayload(result);
                },
                (err) => {
                    response.setStatus(500).setSuccess(false).setPayload(err);
                    res.status(response.status).json(response);
                },
                () => {
                    res.status(response.status).json(response.toJson());
                },
            );
    },
    /**
     * Find All user
     */
    FindAll: (req, res) => {
        const response = new Response();
        Rx
            .from(UserDb.FindAll(req.query))
            .subscribe(
                (result) => {
                    response.setPayload(result);
                },
                (err) => {
                    response.setStatus(500).setSuccess(false).setPayload(err);
                    res.status(response.status).json(response);
                },
                () => {
                    res.status(response.status).json(response.toJson());
                },
            );
    },
    /**
     * Login
     */
    Login: (req, res) => {
        const response = new Response();
        Rx
            .from(UserDb.FindOne({ email: req.body.email }))
            .pipe(
                // First check if the account exist
                takeWhile((userData) => {
                    if (userData === null) {
                        response.setStatus(404).setMsg('Account not found');
                    }
                    return userData !== null;
                }),
                // Check password
                takeWhile((result) => {
                    if (!decrypt(req.body.password, result.password)) {
                        response.setStatus(401).setMsg('Invalid password');
                    }
                    return response.status === 200;
                }),
                // Generate token
                flatMap(result => Rx.of(CreateToken(result))),
            )
            .subscribe(
                (result) => {
                    response.setPayload({ token: result });
                },
                (err) => {
                    response.setStatus(500).setSuccess(false).setPayload(err);
                    res.status(response.status).json(response);
                },
                () => {
                    res.status(response.status).json(response.toJson());
                },
            );
    },
};
