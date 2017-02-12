const mongoose = require('mongoose')
const config = require('../config/config')

exports.connect = () => {
  var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } } }

  mongoose.connect(config.MONGOLAB_URI, options)
  var conn = mongoose.connection

  conn.on('error', console.error.bind(console, 'connection error:'))

  conn.once('open', function () {
    // Wait for the database connection to establish, then start the app
  })
}
