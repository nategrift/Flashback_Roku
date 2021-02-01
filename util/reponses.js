
const jwt = require('jsonwebtoken');
let config = require('../config');


module.exports.errorResponse = function errorResponse(status, err, res) {

  // if error connecting to database 
    if (err.includes('ECONNREFUSED')) {
      err = "Error: Unable to connect to Database, Sorry for the inconvenience. Please try again later"
    }

    return res.status(status).json({
        success: false,
        error: err,
    });
}

module.exports.successResponse = function successResponse(username, id, res) {
  // Create token
  let token = jwt.sign(
    { username: username, id: id },
    config.secret,
    { expiresIn: '24h' }
  );
  // Return token and Username
  res.json({
    success: true,
    username: username,
    token: token,
  });
}