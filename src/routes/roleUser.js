const express = require('express');
const RoleUser = require('../models/RoleUser');
const router = express.Router();
const Controller = require('../Controllers/index')


//GET ALL ROLES
router.get('/', Controller.Role_Controller.getAllRoleUser);

//POST ROLE
router.post('/', Controller.Role_Controller.postRoleUser);

//SPECIFIC ROLE
router.get('/:roleUserId',Controller.Role_Controller.getRoleUserById);

//DELETE ROLE
router.delete('/:roleUserId', Controller.Role_Controller.deleteRoleUser);

//UPDATE ROLE
router.patch('/:roleUserId', Controller.Role_Controller.UpdateRoleById);

module.exports = router;

