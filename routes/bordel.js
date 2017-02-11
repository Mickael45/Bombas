const router = require('express')()
const xmlGenerator = require('./../controllers/xmlGenerator')
const bordelController = require('./../controllers/bordelController')

router.post('/auth/xml', xmlGenerator.generateXml)

router.get('/auth/xml', xmlGenerator.getXml)

router.get('/auth/supplies', bordelController.getSupplies)

router.get('/auth/stations', bordelController.getStations)

router.get('/auth/vehicles', bordelController.getVehicles)

router.get('/auth/clients', bordelController.getClients)

router.get('/auth/vehicle/:id', bordelController.getVehicleById)

router.get('/auth/client/:id', bordelController.getClientById)

router.get('/auth/station/:id', bordelController.getStationById)

module.exports = router
