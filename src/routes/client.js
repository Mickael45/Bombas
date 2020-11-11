const router = require('express')()
const getClientController = require('./../controllers/client/get')

router.get('/auth/clients', getClientController.getClients)

router.get('/auth/client/:id', getClientController.getClientById)

module.exports = router
