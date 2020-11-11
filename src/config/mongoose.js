const mongoose = require('mongoose')
const env = require('./env')

exports.connect = () => {
  var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } } }

  mongoose.connect(env.MONGOLAB_URI, options)
  var conn = mongoose.connection

  conn.on('error', console.error.bind(console, 'connection error:'))

  conn.once('open', function () {
    // Wait for the database connection to establish, then start the app
  })
}
