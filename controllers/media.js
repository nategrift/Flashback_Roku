
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
    let media = await Media.getMediaById(mediaId);
    res.status(200).json({
      ok: true,
      media: media[0]
    });

  } catch (err) {
    return next(newError(err))
  }
};

exports.postLikeMedia = async (req, res, next) => {
  const mediaId = req.params.movieId;
  try {
    let media = await Media.likeMedia(mediaId, req.id);
    res.status(201).json(media);

  } catch (err) {
    return next(newError(err))
  }
};

exports.deleteLikeMedia = async (req, res, next) => {
  const mediaId = req.params.movieId;

  try {
    let media = await Media.unlikeMedia(mediaId, req.id);
    res.status(201).json(media);

  } catch (err) {
    return next(newError(err))
  }
};

exports.mediaSendSuccess = (req, res, next) => {
  const result = req.media;
  const status = req.status;

  return res.status(status).json({
    success: true,
    media: result
  })

};




