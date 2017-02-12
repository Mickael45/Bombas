const router = require('express')()
const getStationController = require('./../controllers/station/get')

router.get('/auth/stations', getStationController.getStations)

router.get('/auth/station/:id', getStationController.getStationById)

module.exports = router
