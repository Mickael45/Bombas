const fs = require('fs')
const xmlify = require('xmlify')

exports.generateXml = (req, res) => {
  var xml = xmlify(req.body, { root: 'AbastecimentoProfissional', wrapArrays: false })
  fs.writeFile('test.xml', xml, function (err) {
    if (err) {
      return res.status(424).json({ message: 'Error creating xml file', error: err })
    }
  })
  res.attachment('test.xml')
  res.setHeader('Content-Type', 'application/octet-stream')
  res.end(JSON.stringify(xml, null, 2), 'utf8')
}
