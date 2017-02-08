const router = require('express')()
const pumpController = require('./../controllers/pumpController')

router.post('/pump', pumpController.registerSupply)

module.exports = router
