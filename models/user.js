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

  // Profiles for Users
  static async getProfiles(username) {
    const [
      user,
    ] = await db.execute(
        `SELECT p.* FROM tbl_profiles as p Left JOIN tbl_accounts AS a ON p.profiles_account_id = a.account_id WHERE a.account_username = ?;`,
        [username]
    );

    // If no other users exist
    if (user.length > 0) {
      return user;

    // If user exists
    } else {
      const error = new Error('Invalid Username or Password. Please try again');
      error.statusCode = 401;
      throw error;
    }
  }


  // Profiles for Users
  static async selectProfile(username, profileId, pin) {
    
    // Preventing pin from being null
    if (!pin) {
      pin = 0;
    }

    const [
      profile,
    ] = await db.execute(
        `SELECT a.account_id as id, p.profiles_id, a.account_username as username, l.levels_protected as level FROM tbl_profiles as p Left JOIN tbl_accounts AS a ON p.profiles_account_id = a.account_id LEFT JOIN tbl_levels as l ON l.levels_id = p.profiles_level_id WHERE a.account_username = ? and p.profiles_id = ? AND (l.levels_protected < 1 OR p.profiles_pin = ?);`,
        [username, profileId, pin]
    );

    // If no other users exist
    if (profile.length > 0) {
      return profile[0];

    // If user exists
    } else {
      const error = new Error('Unable to select profile.');
      error.statusCode = 401;
      throw error;
    }
  }


}