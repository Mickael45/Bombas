var xmlify = require('xmlify')

exports.generateXml = (req, res) => {
  var xml = xmlify(req.body, { root: 'AbastecimentoProfissional', wrapArrays: false })
  console.log(xml)
  return res.send('lol')
}
