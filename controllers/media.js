const db = require('../util/database');

exports.getMedia = async (req, res, next) => {
    let rows;
    try {
        [rows] = await db.execute('SELECT * FROM tbl_media');
        res.status(201).json(rows);
    } catch (err) {
      const error = new Error(err);
      error.statusCode = 500;
      next(error);
    }
};
