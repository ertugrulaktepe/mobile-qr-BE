import express, { Request, Response } from 'express';
const authController = require('../controllers/AuthController');
const router = express.Router();

router.post('/login', authController.login);
module.exports = router;
