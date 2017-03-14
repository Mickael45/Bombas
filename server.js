const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const headerSetter = require('./config/headers')
const routes = require('./routes')
const mongooseConfig = require('./config/mongoose')
const env = require('./config/env')
const tokenHelper = require('./helpers/tokenGenerator')

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/*', headerSetter.setHeaders)
mongooseConfig.connect()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

for (var route in routes) {
  app.use('/', routes[route])
}

app.use(express.static('.'))

app.use('/auth', tokenHelper.tokenValidator)

app.listen(env.PORT)

console.log('Ready')
