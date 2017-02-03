const React = require('react')
const ValidationCodeBox = require('./../validationCodeBox/validationCodeBox')
const SubmitValidationCodeButton = require('./../submitValidationCodeButton/submitValidationCodeButton')
const ResendValidationCodeButton = require('./../resendValidationCodeButton/resendValidationCodeButton')

const ValidationCodeForm = () => (
  <div>
    <ValidationCodeBox />
    <SubmitValidationCodeButton />
    <ResendValidationCodeButton />
  </div>
)

module.exports = ValidationCodeForm
