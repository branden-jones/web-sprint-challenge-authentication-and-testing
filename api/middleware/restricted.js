const { JWT_SECRET } = require('../index') //eslint-disable-line
const jwt = require('jsonwebtoken')  //eslint-disable-line

module.exports = (req, res, next) => {  //eslint-disable-line
  // const token = req.headers.authorization
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};
