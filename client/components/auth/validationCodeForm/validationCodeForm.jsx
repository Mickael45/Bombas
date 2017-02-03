const React = require('react')
const ValidationCodeBox = require('./../validationCodeBox/validationCodeBox')
const SubmitValidationCodeButton = require('./../submitValidationCodeButton/submitValidationCodeButton')

const ValidationCodeForm = () => (
  <div>
    <ValidationCodeBox />
    <SubmitValidationCodeButton />
  </div>
)

module.exports = ValidationCodeForm
