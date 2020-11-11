const router = require('express').Router()
const getPhoneAuthController = require('./../controllers/auth/phone/get')
const postPhoneAuthController = require('./../controllers/auth/phone/post')

router.post('/auth/phone/signIn', postPhoneAuthController.signIn)

router.post('/auth/phone/', postPhoneAuthController.send)

router.post('/auth/phone/:id/verify', postPhoneAuthController.verify)

router.get('/auth/phone/:id/resend', getPhoneAuthController.resend)

router.get('/auth/users/from/:token', getPhoneAuthController.getByToken)

module.exports = router
