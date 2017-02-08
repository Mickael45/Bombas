const fs = require('fs')
const path = require('path')
const xmlify = require('xmlify')

exports.generateXml = (req, res) => {
  console.log('------------------------REQUESTED------------------------')
  var xml = xmlify(req.body, { root: 'AbastecimentoProfissional', wrapArrays: false })
  console.log(xml)
  fs.writeFile('test.xml', xml, function (err) {
    if (err) {
      return res.status(424).json({ message: 'Error creating xml file', error: err })
    }
    console.log('file created')
    return res.json({ messsage: 'file created' })
  })
}

exports.getXml = (req, res) => {
  return res.download(path.join(__dirname, '../test.xml'), 'test.xml')
}
