const User = require('./../../models/user')
const tokenGenerator = require('./../../helpers/tokenGenerator')
const jwt = require('jsonwebtoken')
const config = require('./../../config/config')

exports.send = (req, res) => {
  var user = new User({
    userName: req.body.phoneNumber,
    password: req.body.password,
    countryCode: req.body.countryCode,
    phone: req.body.phoneNumber,
    email: req.body.countryCode.split('+')[1] + req.body.phoneNumber + '@gmail.com'
  })
  user.save(function (err, doc) {
    if (err) {
      return res.status(424).json({ message: 'There was a problem creating your account - note that all fields are required. Please double-check your input and try again. ', error: err })
    } else {
      user.sendAuthyToken(doc, function (err, finalUser) {
        if (err) {
          return res.status(424).json({ message: 'There was an error sending the token. Hit the resend button to receive a new validation code. ', error: err })
        }
        return res.json({ message: 'The verification code has been sent.', user })
      })
    }
  })
}

exports.verify = (req, res) => {
  var user
  User.findById(req.params.id, function (err, doc) {
    if (err || !doc) {
      return res.status(404).json({ message: 'User not found for this ID.', error: err })
    }
    user = doc
    user.verifyAuthyToken(req.body.code, postVerify, user)
  })

  function postVerify (err) {
    if (err) {
      return res.status(400).json({ message: 'The token you entered was invalid - please retry.', error: err })
    }
    user.verified = true
    user.save(postSave)
  }

  function postSave (err) {
    if (err) {
      return res.status(424).json({ message: 'There was a problem validating your account - please enter your validation code again.', error: err })
    }
    return res.json({ message: 'You did it! Signup complete :)', user, token: tokenGenerator.generateToken(user) })
  }
}

exports.resend = (req, res) => {
  User.findById(req.params.id, function (err, user) {
    if (err || !user) {
      return res.status(404).json({ message: 'User not found for this ID.', error: err })
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
        return res.status(404).json({ message: 'User not found', error: err })
      }
      return res.json({
        message: 'User successfully found',
        user: user,
        token: tokenGenerator.generateToken(user)
      })
    })
  })
}

exports.signIn = (req, res) => {
  User.findOne({'phone': req.body.phoneNumber}, function (err, user) {
    if (err || !user) {
      return res.status(404).json({ message: 'User not found', error: err })
    }
    var result = user.comparePassword(req.body.password)
    if (!result) {
      return res.status(400).json({ message: 'Bad password', error: err })
    }
    return res.json({
      message: 'User successfully found',
      user: user,
      token: tokenGenerator.generateToken(user)
    })
  })
}
