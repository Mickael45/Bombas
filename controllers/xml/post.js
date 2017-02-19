const fs = require('fs')
const xmlify = require('xmlify')

exports.generateXml = (req, res) => {
  var xml = xmlify(req.body, { root: 'AbastecimentoProfissional', wrapArrays: false })
  fs.writeFile('test.xml', xml, function (err) {
    if (err) {
      return res.status(424).json({ message: 'Um erro occureu durante enquanto estava criando o ficheiro XML', error: err })
    }
    return res.json({ messsage: 'file created' })
  })
}
