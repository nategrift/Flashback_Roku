const db = require('../util/database');

module.exports = class User {

  static async createUser(username, password, email) {
    await db.execute(
      `INSERT INTO tbl_accounts (account_username, account_password, account_email) VALUES (?, ?, ?);`,
      [username, password, email]
    );

    // Retrieve user id and username
    let [
      user
    ] = await db.execute(
        `SELECT tbl_accounts.account_id, tbl_accounts.account_username FROM tbl_accounts WHERE tbl_accounts.account_username = ?`,
        [username]
    );
    
    if (user) {
      return user[0];
    }
  }

  static async getUserByUsername(username) {
    let user;
    [
      user,
    ] = await db.execute(
        `SELECT tbl_accounts.account_username, tbl_accounts.account_id FROM tbl_accounts WHERE tbl_accounts.account_username = ?`,
        [username]
    );
    
    if (user) {
      return user[0];
    } else {
      const error = new Error('User not found.');
      error.statusCode = 404;
      throw error;
    }
  }

  static async checkUsernameAndPassword(username, password) {
    const [
      user,
    ] = await db.execute(
        `SELECT account_username, account_id FROM tbl_accounts WHERE account_username = ? AND account_password = ?`,
        [username, password]
    );

    // If no other users exist
    if (user.length > 0) {
      return user[0]

    // If user exists
    } else {
      const error = new Error('Invalid Username or Password. Please try again');
      error.statusCode = 401;
      throw error;
    }
  }


}