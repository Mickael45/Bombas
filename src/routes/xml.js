const router = require('express')()
const getXmlGenerator = require('./../controllers/xml/get')
const postXmlGenerator = require('./../controllers/xml/post')

router.post('/auth/xml', postXmlGenerator.generateXml)

router.get('/download', getXmlGenerator.getXml)

module.exports = router
