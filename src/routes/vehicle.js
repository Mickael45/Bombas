const router = require('express')()
const getVehicleController = require('./../controllers/vehicle/get')
const postVehicleController = require('./../controllers/vehicle/post')

router.get('/auth/vehicle/:id', getVehicleController.getVehicleById)

router.get('/auth/vehicles', getVehicleController.getVehicles)

router.post('/auth/vehicle/:id/verify', postVehicleController.verify)

module.exports = router
