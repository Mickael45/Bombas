const React = require('react')
const VehicleRegistrationNumberBox = require('./vehicleRegistrationNumberBox/vehicleRegistrationNumberBox')

const VehicleInfoTile = React.createClass({
  render () {
    return (
      <div>
        <VehicleRegistrationNumberBox />
      </div>
    )
  }
})

module.exports = VehicleInfoTile
