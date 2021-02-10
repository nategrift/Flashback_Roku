const express = require('express');

const router = express.Router();

const authRoutes = require('./auth');
const mediaRoutes = require('./media');
const userRoutes = require('./user');

const tokensMiddleware = require('../middleware/token.js');

// Api Routes (Auth)
router.use('/auth', authRoutes);

// API Routes
router.use('/media', tokensMiddleware.checkToken, mediaRoutes);
router.use('/user', tokensMiddleware.checkToken, userRoutes);


module.exports = router;