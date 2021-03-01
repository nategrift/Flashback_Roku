const db = require('../util/database');

module.exports = class Media {

  static async getMedia(type, rangemin, rangemax, level) {
    let query;
    let adminQuery;
    let params;
    if (type && rangemin && rangemax) {
      // Has 3 params (type, rangemin, rangemax)

      query = `
      SELECT DISTINCT m.*, t.types_title as type, COUNT(l.likes_media_id) as likes FROM tbl_media as m 
      LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id 
      LEFT JOIN tbl_media_likes as l ON m.media_id = l.likes_media_id
      where t.types_value = ?
      AND m.media_release > ? 
      AND m.media_release < ?
      AND m.media_mature = 0
      GROUP BY m.media_id;`

      adminQuery = `
      SELECT DISTINCT m.*, t.types_title as type, COUNT(l.likes_media_id) as likes FROM tbl_media as m 
      LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id 
      LEFT JOIN tbl_media_likes as l ON m.media_id = l.likes_media_id
      where t.types_value = ?
      AND m.media_release > ? 
      AND m.media_release < ?
      GROUP BY m.media_id;`

      params = [type, rangemin, rangemax];
    } else if (type) {
      // Has 1 params (type)
      query = `
      SELECT DISTINCT m.*, t.types_title as type, COUNT(l.likes_media_id) as likes FROM tbl_media as m 
      LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id 
      LEFT JOIN tbl_media_likes as l ON m.media_id = l.likes_media_id
      where t.types_value = ?
      and m.media_mature = 0
      GROUP BY m.media_id;`
      adminQuery = `
      SELECT DISTINCT m.*, t.types_title as type, COUNT(l.likes_media_id) as likes FROM tbl_media as m 
      LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id 
      LEFT JOIN tbl_media_likes as l ON m.media_id = l.likes_media_id
      where t.types_value = ?
      GROUP BY m.media_id;`

      params = [type];
    } else {
      query = `
      SELECT DISTINCT m.*, t.types_title as type, COUNT(l.likes_media_id) as likes FROM tbl_media as m 
      LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id 
      LEFT JOIN tbl_media_likes as l ON m.media_id = l.likes_media_id
      WHERE m.media_mature = 0
      GROUP BY m.media_id;`

      adminQuery = `
      SELECT DISTINCT m.*, t.types_title as type, COUNT(l.likes_media_id) as likes FROM tbl_media as m 
      LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id 
      LEFT JOIN tbl_media_likes as l ON m.media_id = l.likes_media_id
      GROUP BY m.media_id;`
    }

    // If no access then only show kid friendly content
    if (level === 1) {
      query = adminQuery;
    }

    let rows;
    if (params) {
      [rows] = await db.execute(
        query,
        params
      );
    } else {
      [rows] = await db.execute(
        query
      );
    }

    return rows;

  }

  static async getMediaTypes() {
    const [rows] = await db.execute(
      `SELECT t.types_id as id, t.types_value as value, t.types_title as title, t.types_icon as icon FROM tbl_media_types as t`
    );
    return rows;
  }

  static async getMediaById(movieId) {
    const [rows] = await db.execute('SELECT m.*, t.types_value as type FROM tbl_media as m LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id WHERE m.media_id = ?',
      [movieId]);

    // If movie exists return else throw error
    if (!rows || rows.length < 1) {
      const error = new Error('Movie does not exist');
      error.statusCode = 404;
      throw error;
    } else {
      return rows;
    }
  }

  static async userHasLikedMedia(movieId, userId) {
    const [media] = await db.execute('SELECT * FROM `tbl_media` as m WHERE m.media_id = ?;',
      [movieId]);

    if (media.length <= 0) {
      const error = new Error('Error liking media. Media doesn\'t exist');
      error.statusCode = 404;
      throw error;
    }
    const [alreadyExists] = await db.execute('SELECT * FROM `tbl_media_likes` WHERE likes_media_id = ? AND likes_user_id = ?;',
      [movieId, userId]);

    if (alreadyExists.length > 0) {
      return {
        success: true,
        hasLiked: true
      }
    } else {
      return {
        success: true,
        hasLiked: false
      }
    }
  }

  static async likeMedia(movieId, userId) {
    const [media] = await db.execute('SELECT * FROM `tbl_media` as m WHERE m.media_id = ?;',
      [movieId]);

    if (media.length <= 0) {
      const error = new Error('Error liking media. Media doesn\'t exist');
      error.statusCode = 404;
      throw error;
    }

    const [alreadyExists] = await db.execute('SELECT * FROM `tbl_media_likes` WHERE likes_media_id = ? AND likes_user_id = ?;',
      [movieId, userId]);

    if (alreadyExists.length > 0) {
      const error = new Error('Error liking media. Already has been liked.');
      error.statusCode = 404;
      throw error;
    }

    const [rows] = await db.execute('INSERT INTO `tbl_media_likes` (`likes_media_id`, `likes_user_id`) VALUES ( ?, ? );',
      [movieId, userId]);

    // If movie exists return else throw error
    if (rows.affectedRows !== 1) {
      const error = new Error('Error liking media. Check to make sure media id exists.');
      error.statusCode = 404;
      throw error;
    } else {
      const response = {
        success: true,
        message: 'Liked Message'
      }
      return response;
    }
  }
  static async unlikeMedia(movieId, userId) {
    const [media] = await db.execute('SELECT * FROM `tbl_media` as m WHERE m.media_id = ?;',
      [movieId]);

    if (media.length <= 0) {
      const error = new Error('Error unliking media. Media doesn\'t exist');
      error.statusCode = 404;
      throw error;
    }

    const [alreadyExists] = await db.execute('SELECT * FROM `tbl_media_likes` WHERE likes_media_id = ? AND likes_user_id = ?;',
      [movieId, userId]);

    if (alreadyExists.length <= 0) {
      const error = new Error('Error unliking media. Please like it first.');
      error.statusCode = 404;
      throw error;
    }

    const [rows] = await db.execute('DELETE FROM `tbl_media_likes` WHERE likes_media_id = ? AND likes_user_id = ?;',
      [movieId, userId]);

    // If movie exists return else throw error
    if (rows.affectedRows !== 1) {
      const error = new Error('Error liking media.');
      error.statusCode = 404;
      throw error;
    } else {
      const response = {
        success: true,
        message: 'Unliked Message'
      }
      return response;
    }
  }

}