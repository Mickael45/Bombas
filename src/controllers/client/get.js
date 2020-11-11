const Client = require('./../../models/client')
const requestIdExtractor = require('./../../helpers/requestIdExtractor')

exports.getClients = (req, res) => {
  requestIdExtractor.formatIds(req.query, (formattedIds) => {
    Client.find(req.body.clientIds, function (err, clients) {
      if (err) {
        return res.status(400).json({ message: 'Os clientes não foram encontrados', error: err })
      }
      return res.send(clients)
    })
  })
}

exports.getClientById = (req, res) => {
  Client.findById(req.params.id, function (err, client) {
    if (err) {
      return res.status(400).json({ message: 'O cliente não foi encontrado', error: err })
    }
    return res.send(client)
  })
}
