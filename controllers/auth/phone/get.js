const User = require('./../../../models/User')
const jwt = require('jsonwebtoken')
const config = require('./../../../config/env')
const tokenGenerator = require('./../../../helpers/tokenGenerator')

exports.resend = (req, res) => {
  User.findById(req.params.id, function (err, user) {
    if (err || !user) {
      return res.status(400).json({ message: 'User not found for this ID.', error: err })
    }
    user.sendAuthyToken(user, postSend)
  })

  function postSend (err) {
    if (err) {
      return res.status(424).json({ message: 'There was a problem sending you the code - please retry.', error: err })
    }
    return res.json({ message: 'Code re-sent!' })
  }
}

exports.getByToken = (req, res) => {
  jwt.verify(req.params.token, config.JWT_SECRET, function (err, user) {
    if (err) {
      return res.status(400).json({ message: 'Invalid token', error: err })
    }
    User.findById({
      '_id': user._id
    }, function (err, user) {
      if (err) {
        return res.status(400).json({ message: 'User not found', error: err })
      }
      return res.json({
        message: 'User successfully found',
        user: user,
        token: tokenGenerator.generateToken(user)
      })
    })
  })
}
