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
const appController = require('./controllers/appController')
const routes = require('./routes')
const config = require('./config/config')

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/*', appController.setHeaders)

mongoose.connect(config.MONGOLAB_URI)

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/client/public', express.static('./client/public'))

for (var route in routes) {
  app.use('/', routes[route])
}

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

app.listen(config.PORT)

console.log('Ready')
