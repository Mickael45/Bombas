const React = require('react')
const RegistrationNumberBox = require('./registrationNumberBox/registrationNumberBox')
const RegistrationCountryBox = require('./registrationCountryBox/registrationCountryBox')
const NFCCardNumberBox = require('./NFCCardNumberBox/NFCCardNumberBox')
const GasTypeBox = require('./gasTypeBox/gasTypeBox')
const DistanceInput = require('./distanceInput/distanceInput')
const TotalWeightBox = require('./totalWeightBox/totalWeightBox')

const VehicleInfoTile = React.createClass({
  render () {
    return (
      <div>
        <RegistrationNumberBox />
        <RegistrationCountryBox />
        <NFCCardNumberBox />
        <GasTypeBox />
        <DistanceInput />
        <TotalWeightBox />
      </div>
    )
  }
})

module.exports = VehicleInfoTile
