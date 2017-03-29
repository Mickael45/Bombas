const router = require('express')()
const getSupplyController = require('./../controllers/supply/get')
const postSupplyController = require('./../controllers/supply/post')

router.get('/registerSupply', postSupplyController.registerSupply)

router.post('/auth/updateSupply', postSupplyController.updateLastSupply)

router.get('/auth/supplies', getSupplyController.getSupplies)

router.get('/auth/supply/lastSupplyQuantity', getSupplyController.getLastSupplyQuantity)

module.exports = router
