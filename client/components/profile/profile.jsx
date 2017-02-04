const React = require('react')
const GasStationInfoTile = require('./gasStationInfoTile/gasStationInfoTile')
const VehicleInfoTile = require('./vehicleInfoTile/vehicleInfoTile')
const SupplyInfoTile = require('./supplyInfoTile/supplyInfoTile')
const { Col } = require('react-bootstrap')

const Profile = React.createClass({
  render () {
    return (
      <div>
        <Col md={4} xs={4}>
          <GasStationInfoTile />
        </Col>
        <Col md={4} xs={4}>
          <VehicleInfoTile />
        </Col>
        <Col md={4} xs={4}>
          <SupplyInfoTile />
        </Col>
      </div>
    )
  }
})

module.exports = Profile
