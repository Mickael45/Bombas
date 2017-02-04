const React = require('react')
const ValidationCodeBox = require('./validationCodeBox/validationCodeBox')
const SubmitValidationCodeButton = require('./submitValidationCodeButton/submitValidationCodeButton')
const ResendValidationCodeButton = require('./resendValidationCodeButton/resendValidationCodeButton')
const { Col } = require('react-bootstrap')

const ValidationCodeForm = () => (
  <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
    <ValidationCodeBox />
    <SubmitValidationCodeButton />
    <ResendValidationCodeButton />
  </Col>
)

module.exports = ValidationCodeForm
