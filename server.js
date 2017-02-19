require('babel-register')

const React = require('react')
const ReactRouter = require('react-router')
const ReactDOMServer = require('react-dom/server')
const match = ReactRouter.match
const RouterContext = ReactRouter.RouterContext
const _ = require('lodash')
const ReactRedux = require('react-redux')
const Provider = ReactRedux.Provider
const store = require('./client/store/store')
const fs = require('fs')
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const Client = require('./client/client.js')
const Routes = Client.Routes
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const headerSetter = require('./config/headers')
const routes = require('./routes')
const env = require('./config/env')
const tokenHelper = require('./helpers/tokenGenerator')

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/*', headerSetter.setHeaders)

mongoose.connect(env.MONGOLAB_URI)

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/public', express.static('./public'))

for (var route in routes) {
  app.use('/', routes[route])
}

app.use('/auth', tokenHelper.tokenValidator)

app.use((req, res) => {
  match({ routes: Routes(), location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathName + redirectLocation.search)
    } else if (renderProps) {
      const body = ReactDOMServer.renderToString(
        React.createElement(Provider, {store},
          React.createElement(RouterContext, renderProps)
        )
      )
      res.status(200).send(template({ body }))
    } else {
      res.status(404).send('Not found')
    }
  })
})

app.listen(env.PORT)

console.log('Ready')
