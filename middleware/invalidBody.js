module.exports = (err, req, res, next) => {
  // This check makes sure this is a JSON parsing issue, but it might be
  // coming from any middleware, not just body-parser:

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      const error = new Error("SyntaxError!  Please send requests with proper syntax and required params.");
      error.statusCode = 400;
      return next(error);
  }

  next();
};