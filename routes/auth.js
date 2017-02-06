const router = require('express').Router()
const phoneAuthController = require('./../controllers/auth/phoneAuthController')

router.post('/auth/phone/signIn', phoneAuthController.signIn)
router.post('/auth/phone/', phoneAuthController.send)
router.post('/auth/phone/:id/verify', phoneAuthController.verify)
router.get('/auth/phone/:id/resend', phoneAuthController.resend)
router.get('/auth/users/from/:token', phoneAuthController.getByToken)

module.exports = router
