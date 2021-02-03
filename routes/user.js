const express = require('express');

const usersController = require('../controllers/users');

const router = express.Router();

router.get('/profiles', usersController.getProfiles);
router.post('/profiles/:profileid', usersController.postChooseProfile);

module.exports = router;
