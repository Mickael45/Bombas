/* const creator = require('./../controllers/creator')

router.post('/auth/client', creator.createClient)

router.get('/auth/pump', creator.createPump)

router.get('/auth/station', creator.createStation)

router.get('/auth/supply', creator.createSupply)

router.get('/auth/vehicle', creator.createVehicle) */

const router = require('express')()
const xmlGenerator = require('./../controllers/xmlGenerator')
const bordelController = require('./../controllers/bordelController')

router.get('/auth/xml', xmlGenerator.generateXml)

router.get('/auth/supplies', bordelController.getSupply)

router.get('/auth/stations', bordelController.getStation)

router.get('/auth/vehicles', bordelController.getVehicle)

router.get('/auth/clients', bordelController.getClient)

module.exports = router
