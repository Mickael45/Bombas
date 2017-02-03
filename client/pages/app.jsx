const React = require('react')
const SignUpForm = require('./../components/auth/signUpForm/signUpForm')
const ValidationCodeForm = require('./../components/auth/validationCodeForm/validationCodeForm')

const App = () => (
  <div>
    <SignUpForm />
    <ValidationCodeForm />
  </div>
)

module.exports = App
