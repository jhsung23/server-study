const express = require('express');
const router = express.Router();
const { getAllUsers, addUser, updateUser, removeUser } = require('../controllers/userController');

router.get('/', getAllUsers);

router.post('/', addUser);

router.put('/:id', updateUser);

router.delete('/:id', removeUser);

module.exports = router;
