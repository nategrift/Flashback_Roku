
const newError = require('../util/error');

const Media = require('../models/media')

exports.getMedia = async (req, res, next) => {
  const type = req.query.type;
  const rangemin = req.query.rangemin;
  const rangemax = req.query.rangemax;

  try {
    let media = await Media.getMedia(type, rangemin, rangemax, req.level);
    res.status(200).json({
      ok: true,
      media: media
    });
  } catch (err) {
    return next(newError(err))
  }
};

exports.getTypes = async (req, res, next) => {

  try {
    let types = await Media.getMediaTypes();
    res.statusCode = 201;
    res.json({
      ok: true,
      types: types
    })
  } catch (err) {
    const error = new Error(err);
    error.statusCode = 500;
    next(error);
  }
};

exports.getMediaById = async (req, res, next) => {
  const mediaId = req.params.movieId;

  try {
    let media = await Media.getMediaById(mediaId, req.level);
    let hasLikedMedia = await Media.userHasLikedMedia(mediaId, req.id);

    // Get comments
    media.comments = await Media.getComments(mediaId, req.level);

    res.status(200).json({
      ok: true,
      media: media,
      hasLiked: hasLikedMedia.hasLiked
    });

  } catch (err) {
    return next(newError(err))
  }
};

exports.getLikeMedia = async (req, res, next) => {
  const mediaId = req.params.movieId;
  try {
    let hasLikedMedia = await Media.userHasLikedMedia(mediaId, req.id, req.level);
    res.status(201).json(hasLikedMedia);

  } catch (err) {
    return next(newError(err))
  }
};

exports.postLikeMedia = async (req, res, next) => {
  const mediaId = req.params.movieId;
  try {
    let media = await Media.likeMedia(mediaId, req.id, req.level);
    res.status(201).json(media);

  } catch (err) {
    return next(newError(err))
  }
};

exports.deleteLikeMedia = async (req, res, next) => {
  const mediaId = req.params.movieId;

  try {
    let media = await Media.unlikeMedia(mediaId, req.id, req.level);
    res.status(200).json(media);

  } catch (err) {
    return next(newError(err))
  }
};

// Utility Function for media requests
exports.mediaSendSuccess = (req, res) => {
  const result = req.media;
  const status = req.status;

  return res.status(status).json({
    success: true,
    media: result
  })

};


exports.addComment = async (req, res, next) => {
  const mediaId = req.params.movieId;
  const copy = req.body.copy;


  // Validation to make sure there is copy
  if (!copy || copy.length < 1) {
    next(newError('Unable to create comment. Please include copy with your comment.'))
  }
  try {
    let commentResponse = await Media.addComment(mediaId, req.id, req.level, copy);
    res.status(201).json(commentResponse);

  } catch (err) {
    return next(newError(err))
  }

};





