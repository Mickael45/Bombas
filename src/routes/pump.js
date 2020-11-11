const router = require('express')()
const getPumpController = require('./../controllers/pump/get')

router.get('/auth/pumps', getPumpController.getAllPumps)

module.exports = router
