const express = require('express');
const router = express.Router();

const Controller = require('../Controllers/index');

router.get('/',Controller.User_Controller.getAllUser);

router.post('/', Controller.User_Controller.postUser);

router.get('/:userId', Controller.User_Controller.getUserById);

router.delete('/:userId', Controller.User_Controller.deleteUser);

router.patch('/:userId', Controller.User_Controller.updateUser);

module.exports = router;

