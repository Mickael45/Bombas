const React = require('react')
const GasStationInfoTile = require('./gasStationInfoTile/gasStationInfoTile')
const VehicleInfoTile = require('./vehicleInfoTile/vehicleInfoTile')
const SupplyInfoTile = require('./supplyInfoTile/supplyInfoTile')
const InvoiceInfoTile = require('./invoiceInfoTile/invoiceInfoTile')
const DefaultButton = require('./../defaultButton')
const { Col, Row } = require('react-bootstrap')
const { object } = React.PropTypes

const Profile = React.createClass({
  propTypes: {
    data: object
  },
  getInitialState () {
    return {
      distance: ''
    }
  },
  onDistanceChangeEvent (e) {
    console.log('distanceChanged')
    this.setState({ distance: e.target.value })
  },
  onValidationEvent () {
    console.log('----------Validation event----------')
    console.log(this.state.distance)
  },
  render () {
    return (
      <div>
        <Row>
          <Col md={3} xs={3}>
            <GasStationInfoTile {...this.props.data} />
          </Col>
          <Col md={3} xs={3}>
            <VehicleInfoTile
              {...this.props.data}
              distance={this.state.distance}
              onDistanceChangeEvent={this.onDistanceChangeEvent} />
          </Col>
          <Col md={3} xs={3}>
            <SupplyInfoTile {...this.props.data} />
          </Col>
          <Col md={3} xs={3}>
            <InvoiceInfoTile {...this.props.data} />
          </Col>
        </Row>
        <DefaultButton
          onSubmit={this.onValidationEvent}
          title='Enviar' />
      </div>
    )
  }
})

module.exports = Profile
