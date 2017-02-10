const router = require('express').Router()
const infoController = require('./../controllers/infoController')

router.post('/auth/info/', infoController.updateLastSupply)
router.post('/info/', infoController.registerInfo)

module.exports = router
