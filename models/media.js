const db = require('../util/database');

module.exports = class Media {

  static async getMedia(type, rangemin, rangemax, level) {
    let query;
    let params;
    if (type && rangemin && rangemax) {
      // Has 3 params (type, rangemin, rangemax)
      query = 'SELECT m.*, t.types_title as type FROM tbl_media as m LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id where t.types_value = ? AND m.media_release > ? AND m.media_release < ?';
      params = [type, rangemin, rangemax];
    } else if (type) {
      // Has 1 params (type)
      query = "SELECT m.*, t.types_title as type FROM tbl_media as m LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id where t.types_value = ?";
      params = [type];
    } else {
      query = 'SELECT m.*, t.types_title as type FROM tbl_media as m LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id';
    }

    // If no access then only show kid friendly content
    if (level < 1) {
      // Based on queries above to prevent error.  Switches WHERE and AND
      if (!params) {
        query += ' WHERE m.media_mature = 0';
      } else {
        query += ' AND m.media_mature = 0';
      }
    }

    let rows;
    if (params) {
      [ rows ] = await db.execute(
        query,
        params
      );
    } else {
      [ rows ] = await db.execute(
        query
      );
    }
    
    return rows;

  }

  static async getMediaTypes() {
    const [ rows ] = await db.execute(
      `SELECT * FROM tbl_media_types`
    );
    return rows;
  }

}