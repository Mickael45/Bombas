const React = require('react')
const PhoneNumberInput = require('./phoneNumberInput/phoneNumberInput')
const CountryCodeInput = require('./countryCodeInput/countryCodeInput')
const SubmitUserInfoButton = require('./submitUserInfoButton/submitUserInfoButton')
const { Col, Form } = require('react-bootstrap')

const SignUpForm = () => (
  <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
    <Form>
      <CountryCodeInput />
      <PhoneNumberInput />
      <SubmitUserInfoButton />
    </Form>
  </Col>
)

module.exports = SignUpForm
