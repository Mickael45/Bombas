const router = require('express')()
const getSupplyController = require('./../controllers/supply/get')
const postSupplyController = require('./../controllers/supply/post')

router.post('/supplies', postSupplyController.registerSupply)

router.post('/auth/supplies', postSupplyController.updateLastSupply)

router.get('/auth/supplies', getSupplyController.getSupplies)

router.get('/auth/supply/lastSupplyQuantity', getSupplyController.getLastSupplyQuantity)

module.exports = router
