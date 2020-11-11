const config = require('./../config/env')
const jwt = require('jsonwebtoken')

exports.generateToken = (user) => {
  var u = {
    username: user.username,
    _id: user._id.toString()
  }
  var token = jwt.sign(u, config.JWT_SECRET, {
    expiresIn: 60 * 60 * 24
  })
  return token
}

exports.tokenValidator = (req, res, next) => {
  var token = req.headers['authorization']
  if (!token) {
    return next()
  }

  token = token.replace('Bearer ', '')

  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
      return res.status(401).json({ success: false, message: 'Please register Log in using a valid email to submit posts' })
    } else {
      req.user = user // set the user to req so other routes can use it
      next()
    }
  })
}
