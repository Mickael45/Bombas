const React = require('react')
const RegistrationNumberBox = require('./registrationNumberBox/registrationNumberBox')
const RegistrationCountryBox = require('./registrationCountryBox/registrationCountryBox')
const NFCCardNumberBox = require('./NFCCardNumberBox/NFCCardNumberBox')
const GasTypeBox = require('./gasTypeBox/gasTypeBox')
const DistanceBox = require('./distanceBox/distanceBox')

const VehicleInfoTile = React.createClass({
  render () {
    return (
      <div>
        <RegistrationNumberBox />
        <RegistrationCountryBox />
        <NFCCardNumberBox />
        <GasTypeBox />
        <DistanceBox />
      </div>
    )
  }
})

module.exports = VehicleInfoTile
