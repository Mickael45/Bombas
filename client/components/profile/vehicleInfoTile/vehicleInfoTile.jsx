const React = require('react')
const RegistrationNumberBox = require('./registrationNumberBox/registrationNumberBox')
const RegistrationCountryBox = require('./registrationCountryBox/registrationCountryBox')

const VehicleInfoTile = React.createClass({
  render () {
    return (
      <div>
        <RegistrationNumberBox />
        <RegistrationCountryBox />
      </div>
    )
  }
})

module.exports = VehicleInfoTile
