const React = require('react')
const ValidationCodeInput = require('./validationCodeInput/validationCodeInput')
const SubmitValidationCodeButton = require('./submitValidationCodeButton/submitValidationCodeButton')
const ResendValidationCodeButton = require('./resendValidationCodeButton/resendValidationCodeButton')
const { Col } = require('react-bootstrap')

const ValidationCodeForm = () => (
  <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
    <ValidationCodeInput />
    <SubmitValidationCodeButton />
    <ResendValidationCodeButton />
  </Col>
)

module.exports = ValidationCodeForm
