const React = require('react')
const PhoneNumberBox = require('./../phoneNumberBox/phoneNumberBox')
const CountryCodeBox = require('./../countryCodeBox/countryCodeBox')
const SubmitUserInfoButton = require('./../submitUserInfoButton/submitUserInfoButton')

const SignUpForm = () => (
  <div>
    <CountryCodeBox />
    <PhoneNumberBox />
    <SubmitUserInfoButton />
  </div>
)

module.exports = SignUpForm
