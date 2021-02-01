const { query } = require('../util/database');
const newError = require('../util/error');

const Media = require('../models/media')


exports.getMedia = async (req, res, next) => {
    const type = req.query.type;
    const rangemin = req.query.rangemin;
    const rangemax = req.query.rangemax;
 

    try {
      let media = await Media.getMedia(type, rangemin, rangemax);
      res.status(201).json(media);
    } catch (err) {
      return next(newError(err))
    }
};

exports.getTypes = async (req, res, next) => {

    try {
        let types = await Media.getMediaTypes();
        res.status(201).json(types);
    } catch (err) {
      const error = new Error(err);
      error.statusCode = 500;
      next(error);
    }
};
