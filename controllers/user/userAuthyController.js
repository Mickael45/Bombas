const config = require('./../../config/config')
const authy = require('authy')(config.AUTHY_API_KEY)

exports.sendAuthyToken = (user, cb) => {
  if (!user.authyId) {
    authy.register_user(user.countryCode.split('+')[1] + user.phone + '@gmail.com', user.phone, user.countryCode,
      function (err, response) {
        if (err || !response.user) {
          cb.call(err, user)
          return
        }
        user.authyId = response.user.id
        user.save(function (err, doc) {
          if (err || !doc) {
            cb.call(err, user)
          }
          user = doc
          sendToken()
        })
      })
  } else {
    sendToken()
  }

  function sendToken () {
    authy.request_sms(user.authyId, true, function (err, response) {
      cb.call(user, err)
    })
  }
}

exports.verifyAuthyToken = (otp, cb, user) => {
  authy.verify(user.authyId, otp, function (err, response) {
    cb.call(user, err, response)
  })
}
