const express = require('express');
const UserController = require('../../controller/User.controller');

const router = express.Router();

router.post('/', UserController.Create);

router.post('/login', UserController.Login);

router.get('/:id', UserController.FindOneById);

router.get('/', UserController.FindAll);

module.exports = router;
