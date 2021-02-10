
const jwt = require('jsonwebtoken');
let config = require('../config');


module.exports.errorResponse = function errorResponse(status, err, res) {

  // if error connecting to database 
  if (err.includes('ECONNREFUSED')) {
    err = "Error: Unable to connect to Database, Sorry for the inconvenience. Please try again later"
  }

  return res.status(status).json({
    ok: false,
    message: err,
  });
}

module.exports.successResponse = function successResponse(username, id, res) {
  // Create base token
  let token = jwt.sign(
    { username: username, id: id, access: 0 },
    config.secret,
    { expiresIn: '24h' }
  );
  // Return token and Username
  res.json({
    ok: true,
    message: 'Success',
    username: username,
    userId: id,
    token: token,
    tokenExpiration: 86400
  });
}

module.exports.profileSuccess = function profileSuccess(profile, res) {
  // Create token
  // Access level ranges from 0-1
  // 0 = no profile or kids (not mature content)
  // 1 = adult (admin)

  let token = jwt.sign(
    { username: profile.username, id: profile.id, access: profile.level },
    config.secret,
    { expiresIn: '24h' }
  );
  let profileObj = {
    icon: profile.icon,
    name: profile.name,
    access: profile.level
  }
  // Return token and Username
  res.json({
    ok: true,
    message: 'Success',
    profile: profileObj,
    userId: profile.id,
    token: token,
  });
}