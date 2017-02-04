const React = require('react')
const PhoneNumberBox = require('./../phoneNumberBox/phoneNumberBox')
const CountryCodeBox = require('./../countryCodeBox/countryCodeBox')
const SubmitUserInfoButton = require('./../submitUserInfoButton/submitUserInfoButton')
const { Col, Form } = require('react-bootstrap')

const SignUpForm = () => (
  <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
    <Form>
      <CountryCodeBox />
      <PhoneNumberBox />
      <SubmitUserInfoButton />
    </Form>
  </Col>
)

module.exports = SignUpForm
