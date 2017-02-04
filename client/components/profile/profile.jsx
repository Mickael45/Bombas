const React = require('react')
const GasStationInfoTile = require('./gasStationInfoTile/gasStationInfoTile')
const VehicleInfoTile = require('./vehicleInfoTile/vehicleInfoTile')
const SupplyInfoTile = require('./supplyInfoTile/supplyInfoTile')
const InvoiceInfoTile = require('./invoiceInfoTile/invoiceInfoTile')
const DefaultButton = require('./../defaultButton')
const { Col, Row } = require('react-bootstrap')

const createObject = () => (
  {
    gasStation: {
      code: '978546311',
      NIF: 'faf79f48af9f4a9f4af9',
      country: 'Portugao'
    },
    vehicle: {
      registrationNumber: '78-KB-84',
      registrationCountry: 'Portugal',
      NFCCardNumber: '78456123',
      gasType: 'Gasoléo',
      maxWeightCapacity: '900'
    },
    supply: {
      date: '12/01/17 - 12h47',
      liters: '800',
      price: '1.44'
    },
    invoice: {
      number: '35 - 01/15',
      date: '14/02/14 - 13h48'
    }
  }
)

const Profile = React.createClass({
  getInitialState () {
    return {
      data: createObject(),
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
            <GasStationInfoTile {...this.state.data.gasStation} />
          </Col>
          <Col md={3} xs={3}>
            <VehicleInfoTile
              {...this.state.data.vehicle}
              distance={this.state.distance}
              onDistanceChangeEvent={this.onDistanceChangeEvent} />
          </Col>
          <Col md={3} xs={3}>
            <SupplyInfoTile {...this.state.data.supply} />
          </Col>
          <Col md={3} xs={3}>
            <InvoiceInfoTile {...this.state.data.invoice} />
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
