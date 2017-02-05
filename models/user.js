const mongoose = require('mongoose')
const userTokenController = require('./../controllers/user/userAuthyController')

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  isAdmin: { type: Boolean, default: false, select: false },
  authyId: String,
  countryCode: String,
  phone: String,
  verified: { type: Boolean, default: false, select: false }
})

UserSchema.methods.sendAuthyToken = userTokenController.sendAuthyToken

UserSchema.methods.verifyAuthyToken = userTokenController.verifyAuthyToken

module.exports = mongoose.model('user', UserSchema)
