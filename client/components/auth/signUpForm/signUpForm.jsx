const React = require('react')
const PhoneNumberBox = require('./../phoneNumberBox/phoneNumberBox')
const CountryCodeBox = require('./../countryCodeBox/countryCodeBox')
const SubmitUserInfoButton = require('./../submitUserInfoButton/submitUserInfoButton')
const ValidationCodeBox = require('./../validationCodeBox/validationCodeBox')

const SignUpForm = () => (
  <div>
    <CountryCodeBox />
    <PhoneNumberBox />
    <SubmitUserInfoButton />
    <ValidationCodeBox />
  </div>
)

module.exports = SignUpForm
