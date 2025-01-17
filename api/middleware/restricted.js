const { JWT_SECRET } = require('../index') //eslint-disable-line
const jwt = require('jsonwebtoken')  //eslint-disable-line

module.exports = (req, res, next) => {  //eslint-disable-line
  const token = req.headers.authorization;
  if(!token){
   res.status(401).json(`token required`)
  }
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if(err){
      res.status(401).json('invalid token')
    }
    else{
      req.decodedToken = decodedToken
      next()
    }
  })

  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};
