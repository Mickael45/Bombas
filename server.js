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
const baseTemplate = fs.readFileSync('./client/index.html')
const template = _.template(baseTemplate)
const Client = require('./client/client.js')
const Routes = Client.Routes
const express = require('express')
const app = express()

app.use(express.static('./client'))

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

app.listen(8080)

console.log('Ready')
