const router = require('express').Router()
const phoneAuthController = require('./../controllers/auth/phoneAuthController')

router.post('/auth/phone/', phoneAuthController.send)
router.post('/auth/phone/:id/verify', phoneAuthController.verify)
router.get('/auth/phone/:id/resend', phoneAuthController.resend)

module.exports = router
