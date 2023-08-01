import express from 'express';
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getAllUsers', userController.getAllUsers);

module.exports = router;
