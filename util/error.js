module.exports.default = function newError(err, status) {
  const error = new Error(err);

  // Assign HTTP Status code
  if (err.statusCode) {
    error.statusCode = err.statusCode;
  } else if (status) {
    error.statusCode = status;
  } else {
    error.statusCode = 500;
  }
  
  return error;
}