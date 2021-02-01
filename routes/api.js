const express = require('express');

const router = express.Router();

const mediaRoutes = require('./media');
const authRoutes = require('./auth');

const tokensMiddleware = require('../middleware/token.js');

// API Routes
router.use('/media',tokensMiddleware.checkToken, mediaRoutes);
// Api Routes (Auth)
router.use('/auth', authRoutes);

module.exports = router;