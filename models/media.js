const db = require('../util/database');

module.exports = class Media {

  static async getMedia(type, rangemin, rangemax, level) {
    
    // Starting Query
    let query = `SELECT DISTINCT m.*, t.types_title as type, COUNT(l.likes_media_id) as likes FROM tbl_media as m 
    LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id 
    LEFT JOIN tbl_media_likes as l ON m.media_id = l.likes_media_id`;

    let params = [];

    //  Add type query
    if (type) {
      query = query.concat(' WHERE t.types_value = ?');
      params.push(type);
    }

    // Add min and max range 
    if (rangemin && rangemax) {
      query = query.concat(' AND m.media_release > ? AND m.media_release < ?');
      params.push(rangemin, rangemax);
    }

    // Add mature restriction if user doesn't have access
    if (level < 1) {
      query = query.concat(' AND m.media_mature = 0');
    }

    // Finish off query
    query = query.concat(' GROUP BY m.media_id;');

    // If params is empty make it null to prevent empty array entering SQL query
    if (params.length < 0) {
      params = null;
    }

    const [rows] = await db.execute(
      query,
      params
    );
    
    // Retyrb 
    return rows;

  }

  static async getMediaTypes() {
    const [rows] = await db.execute(
      `SELECT t.types_id as id, t.types_value as value, t.types_title as title, t.types_icon as icon FROM tbl_media_types as t`
    );
    return rows;
  }

  static async getMediaById(movieId, level) {

    let query = `
    SELECT DISTINCT m.*, t.types_value as type, COUNT(l.likes_media_id) as likes FROM tbl_media as m 
      LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id 
      LEFT JOIN tbl_media_likes as l ON m.media_id = l.likes_media_id
      WHERE m.media_id = ?
      `;

    // If mature add WHERE statement to get only if its mature
    if (level < 1) {
      query = query.concat(' AND m.media_mature = 0')
    }

    // Add last part of query
    query = query.concat(' GROUP BY m.media_id;')

    const [rows] = await db.execute(query, [movieId])

    // If movie exists return else throw error
    if (!rows || rows.length < 1) {
      const error = new Error('Movie does not exist or you do not have access');
      error.statusCode = 404;
      throw error;
    } else {
      //  Return first item
      return rows[0];
    }
  }

  static async userHasLikedMedia(mediaId, userId, level) {

    // Get Media by Id.  If it doesn't exist or restricted it will throw an error
    await this.getMediaById(mediaId, level);

    // Check if user has already liked
    const [alreadyExists] = await db.execute('SELECT * FROM `tbl_media_likes` WHERE likes_media_id = ? AND likes_user_id = ?;',
      [mediaId, userId]);

    if (alreadyExists.length > 0) {
      return {
        ok: true,
        hasLiked: true
      }
    } else {
      return {
        ok: true,
        hasLiked: false
      }
    }
  }

  static async likeMedia(mediaId, userId, level) {
    

   // Get Media by Id.  If it doesn't exist or restricted it will throw an error
   await this.getMediaById(mediaId, level);

    const [alreadyExists] = await db.execute('SELECT * FROM `tbl_media_likes` WHERE likes_media_id = ? AND likes_user_id = ?;',
      [mediaId, userId]);

    if (alreadyExists.length > 0) {
      const error = new Error('Error liking media. Already has been liked.');
      error.statusCode = 404;
      throw error;
    }

    const [rows] = await db.execute('INSERT INTO `tbl_media_likes` (`likes_media_id`, `likes_user_id`) VALUES ( ?, ? );',
      [mediaId, userId]);

    // If movie exists return else throw error
    if (rows.affectedRows !== 1) {
      const error = new Error('Error liking media. Check to make sure media id exists.');
      error.statusCode = 404;
      throw error;
    } else {
      const response = {
        ok: true,
        hasLiked: true,
        message: 'Liked Message'
      }
      return response;
    }
  }
  static async unlikeMedia(mediaId, userId, level) {

    // Get Media by Id.  If it doesn't exist or restricted it will throw an error
   await this.getMediaById(mediaId, level);

    const [alreadyExists] = await db.execute('SELECT * FROM `tbl_media_likes` WHERE likes_media_id = ? AND likes_user_id = ?;',
      [mediaId, userId]);

    if (alreadyExists.length <= 0) {
      const error = new Error('Error unliking media. Please like it first.');
      error.statusCode = 404;
      throw error;
    }

    const [rows] = await db.execute('DELETE FROM `tbl_media_likes` WHERE likes_media_id = ? AND likes_user_id = ?;',
      [mediaId, userId]);

    // If movie exists return else throw error
    if (rows.affectedRows !== 1) {
      const error = new Error('Error liking media.');
      error.statusCode = 404;
      throw error;
    } else {
      const response = {
        ok: true,
        hasLiked: false,
        message: 'Unliked Message'
      }
      return response;
    }
  }


  static async addComment(mediaId, userId, level, copy) {
    

    // Get Media by Id.  If it doesn't exist or restricted it will throw an error
    await this.getMediaById(mediaId, level);
    
     const [rows] = await db.execute('INSERT INTO `tbl_comments` (`comments_copy`, `comments_media_id`, `comments_user_id`) VALUES ( ?, ?, ? );',
       [copy, mediaId, userId]);
 
     // If movie exists return else throw error
     if (rows.affectedRows !== 1) {
       const error = new Error('Error liking media. Check to make sure media id exists.');
       error.statusCode = 404;
       throw error;

     } else {
       const response = {
         ok: true,
         comments: copy // Later change this to a new list of all the comments for a media
       }
       return response;
     }
   }

   static async getComments(mediaId, level) {
    

    // Get Media by Id.  If it doesn't exist or restricted it will throw an error
    await this.getMediaById(mediaId, level);
    

    const [comments] = await db.execute('SELECT c.comments_id as comment_id, c.comments_copy as comment_copy, a.account_username as comment_username FROM `tbl_comments` AS c LEFT JOIN `tbl_accounts` AS a ON a.account_id = c.comments_user_id WHERE comments_media_id = ?;',
      [mediaId]);

     // response object
     const response = {
      ok: true,
      comments: comments,
      message: ''
    }

    // Response message based on length of comments
    if (comments.length == 0) {
      response.message = 'No comments currently available'
    } else {
      response.message = `Found ${comments.length} comments`
    }

    // return response
    return response;
   }
}