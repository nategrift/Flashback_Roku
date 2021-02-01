const express = require('express');

const mediaController = require('../controllers/media');

const router = express.Router();

// All routes have /media before them
router.get('/', mediaController.getMedia);
router.get('/types', mediaController.getTypes);



module.exports = router;
