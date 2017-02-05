const router = require('express').Router()
const supplyController = require('./../controllers/supplyController')

router.post('/auth/supply/:id/info', supplyController.saveInfo)

module.exports = router
