const React = require('react')
const GasStationInfoTile = require('./gasStationInfoTile/gasStationInfoTile')
const VehicleInfoTile = require('./vehicleInfoTile/vehicleInfoTile')

const Profile = React.createClass({
  render () {
    return (
      <div>
        <GasStationInfoTile />
        <VehicleInfoTile />
      </div>
    )
  }
})

module.exports = Profile
