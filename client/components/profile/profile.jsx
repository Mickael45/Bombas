const React = require('react')
const GasStationInfoTile = require('./gasStationInfoTile/gasStationInfoTile')
const VehicleInfoTile = require('./vehicleInfoTile/vehicleInfoTile')
const SupplyInfoTile = require('./supplyInfoTile/supplyInfoTile')
const InvoiceInfoTile = require('./invoiceInfoTile/invoiceInfoTile')
const { Col } = require('react-bootstrap')
const { object } = React.PropTypes

const Profile = React.createClass({
  propTypes: {
    data: object
  },
  render () {
    return (
      <div>
        <Col md={3} xs={3}>
          <GasStationInfoTile />
        </Col>
        <Col md={3} xs={3}>
          <VehicleInfoTile {...this.props.data} />
        </Col>
        <Col md={3} xs={3}>
          <SupplyInfoTile />
        </Col>
        <Col md={3} xs={3}>
          <InvoiceInfoTile />
        </Col>
      </div>
    )
  }
})

module.exports = Profile
