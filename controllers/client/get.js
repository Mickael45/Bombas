const Client = require('./../../models/client')

exports.getClients = (req, res) => {
  Client.find(req.body.clientIds, function (err, clients) {
    if (err) {
      return res.status(400).json({ message: 'Os clientes não foram encontrados', error: err })
    }
    return res.send(clients)
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
