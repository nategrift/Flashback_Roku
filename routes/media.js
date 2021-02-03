const express = require('express');

const mediaController = require('../controllers/media');

const router = express.Router();

// All routes have /media before them
router.get('/', mediaController.getMedia, mediaController.mediaSendSuccess);
router.get('/:movieId', mediaController.getMediaById, mediaController.mediaSendSuccess);
router.post('/:movieId/like-media', mediaController.postLikeMedia);
router.delete('/:movieId/like-media', mediaController.deleteLikeMedia);

router.get('/types', mediaController.getTypes);



module.exports = router;
