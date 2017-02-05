const router = require('express').Router()
const infoController = require('./../controllers/infoController')

router.get('/auth/info/', infoController.test)

module.exports = router
