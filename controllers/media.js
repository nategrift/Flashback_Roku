const db = require('../util/database')

exports.getMedia = (req, res) => {
  db.execute('SELECT * FROM tbl_media')
  .then((result) => {
    res.status(201).json(result[0]);
  })
  .catch((err) => {
    res.status(500).json(err);
  })
}