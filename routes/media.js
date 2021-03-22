const express = require('express');

const mediaController = require('../controllers/media');

const router = express.Router();

// All routes have /media before them
router.get('/', mediaController.getMedia, mediaController.mediaSendSuccess);
router.get('/types', mediaController.getTypes);
router.get('/:movieId', mediaController.getMediaById, mediaController.mediaSendSuccess);
router.get('/:movieId/like-media', mediaController.getLikeMedia);// Has user liked Media
router.post('/:movieId/like-media', mediaController.postLikeMedia);
router.delete('/:movieId/like-media', mediaController.deleteLikeMedia);

router.post('/:movieId/comment', mediaController.addComment);

module.exports = router;
