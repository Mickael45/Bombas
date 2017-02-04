const React = require('react')
const GasStationInfoTile = require('./gasStationInfoTile/gasStationInfoTile')
const VehicleInfoTile = require('./vehicleInfoTile/vehicleInfoTile')
const SupplyInfoTile = require('./supplyInfoTile/supplyInfoTile')

const Profile = React.createClass({
  render () {
    return (
      <div>
        <GasStationInfoTile />
        <VehicleInfoTile />
        <SupplyInfoTile />
      </div>
    )
  }
})

module.exports = Profile
