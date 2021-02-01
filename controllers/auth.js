
const { successResponse } = require('../util/reponses');
const User = require('../models/user')

const emailValidator = require('deep-email-validator');

const newError = require('../util/error');

exports.postLogin = async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
      return next(newError('Error: Please fill out all required fields', 403));
    }

    // Check username and password to log user in
    try {
      const user = await User.checkUsernameAndPassword(username, password);
      successResponse(user.account_username, user.account_id, res);

    } catch (err) {
      return next(newError(err));
    }
};

exports.postCreateAccount = async (req, res, next) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    try {
      // Check if all params are present
      if (!username || !email || !password) {
        return next(newError('Error: Please fill out all required fields', 409));
      }

      // Query Database for existing user
      const existingUser = await User.getUserByUsername(username);
      if (existingUser) {
        return next(newError('Username taken. Please try again', 209));
      }

      // Check if email is valid
      const emailValid = await emailValidator.validate(email);
      if (!emailValid || email.length < 7) {
        return next(newError('Error: Please use a valid email', 400));
      }

      // Check if password less than 6 letters
      if (password.length < 6) {
        return next(newError('Error: Please use a valid password. Minimum of 6 characters', 400));
      }

      // Insert Data into database
      const user = await User.createUser(username, password, email)

      // If user created, return success
      if (user) {
        successResponse(user.account_username, user.account_id, res);
      } else {
        return next(newError('Error: Unable to create user. Please try again later.'));
      }

    } catch (err) {
      return next(newError(err));
    }
};
