const React = require('react')
const GasStationInfoTile = require('./gasStationInfoTile/gasStationInfoTile')
const VehicleInfoTile = require('./vehicleInfoTile/vehicleInfoTile')
const SupplyInfoTile = require('./supplyInfoTile/supplyInfoTile')
const InvoiceInfoTile = require('./invoiceInfoTile/invoiceInfoTile')
const DefaultButton = require('./../defaultButton')
const { Col } = require('react-bootstrap')
const { object, func, string } = React.PropTypes

const Profile = React.createClass({
  propTypes: {
    data: object,
    getInfo: func,
    sendInfo: func,
    status: string
  },
  componentDidMount () {
    this.props.getInfo()
  },
  getInitialState () {
    return {
      distance: ''
    }
  },
  onDistanceChangeEvent (e) {
    this.setState({ distance: e.target.value })
  },
  onValidationEvent () {
    this.props.sendInfo(this.state.distance)
  },
  render () {
    return (
      <div>
        {
          (this.props.status !== 'data'
            ? <h1>Loading</h1>
            : <div>
              <Col md={3} xs={8} xsOffset={2}>
                <GasStationInfoTile {...this.props.data.gasStation} />
              </Col>
              <Col md={3} xs={8} xsOffset={2}>
                <VehicleInfoTile
                  {...this.props.data.vehicle}
                  distance={this.state.distance}
                  onDistanceChangeEvent={this.onDistanceChangeEvent} />
              </Col>
              <Col md={3} xs={8} xsOffset={2}>
                <SupplyInfoTile {...this.props.data.supply} />
              </Col>
              <Col md={3} xs={8} xsOffset={2}>
                <InvoiceInfoTile {...this.props.data.invoice} />
              </Col>
            </div>
          )
        }
        <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
          <DefaultButton
            class='validation-button'
            onSubmit={this.onValidationEvent}
            title='Enviar' />
        </Col>
      </div>
    )
  }
})

module.exports = Profile
