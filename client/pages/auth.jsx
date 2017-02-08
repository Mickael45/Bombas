const React = require('react')
const AuthContainer = require('./../containers/auth/authContainer')
const ButtonContainer = require('./../containers/buttonContainer')

const Auth = () => (
  <div>
    <AuthContainer />
    <ButtonContainer />
  </div>
)

module.exports = Auth
