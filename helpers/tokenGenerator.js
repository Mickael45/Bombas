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
