const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const userTokenController = require('./../controllers/user/userAuthyController')

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String, select: false },
  isAdmin: { type: Boolean, default: false, select: false },
  authyId: String,
  countryCode: String,
  phone: String,
  verified: { type: Boolean, default: false, select: false }
})

UserSchema.pre('save', function (next) {
  var user = this
  if (!user.isModified('password')) {
    return next()
  }

  bcrypt.hash(user.password, null, null, function (err, hash) {
    if (err) {
      return next(err)
    }
    user.pasword = hash
    next()
  })
})

UserSchema.methods.comparePassword = function (password) {
  var user = this

  return bcrypt.compareSync(password, user.password)
}

UserSchema.methods.sendAuthyToken = userTokenController.sendAuthyToken

UserSchema.methods.verifyAuthyToken = userTokenController.verifyAuthyToken

module.exports = mongoose.model('user', UserSchema)
