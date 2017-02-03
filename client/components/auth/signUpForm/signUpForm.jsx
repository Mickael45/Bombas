const React = require('react')
const PhoneNumberBox = require('./../phoneNumberBox/phoneNumberBox')
const CountryCodeBox = require('./../countryCodeBox/countryCodeBox')

const SignUpForm = () => (
  <div>
    <CountryCodeBox />
    <PhoneNumberBox />
  </div>
)

module.exports = SignUpForm
