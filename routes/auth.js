const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

// All routes have /media before them
router.post('/login', authController.postLogin);
router.post('/create-account', authController.postCreateAccount);

module.exports = router;
