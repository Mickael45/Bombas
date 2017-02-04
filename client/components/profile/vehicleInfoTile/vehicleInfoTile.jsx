const React = require('react')
const RegistrationNumberBox = require('./registrationNumberBox/registrationNumberBox')
const RegistrationCountryBox = require('./registrationCountryBox/registrationCountryBox')
const NFCCardNumberBox = require('./NFCCardNumberBox/NFCCardNumberBox')

const VehicleInfoTile = React.createClass({
  render () {
    return (
      <div>
        <RegistrationNumberBox />
        <RegistrationCountryBox />
        <NFCCardNumberBox />
      </div>
    )
  }
})

module.exports = VehicleInfoTile
