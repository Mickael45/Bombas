const path = require('path')

exports.getXml = (req, res) => {
  return res.download(path.join(__dirname, '../../test.xml'), 'test.xml')
}
