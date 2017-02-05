const React = require('react')
const GasStationInfoTile = require('./gasStationInfoTile/gasStationInfoTile')
const VehicleInfoTile = require('./vehicleInfoTile/vehicleInfoTile')
const SupplyInfoTile = require('./supplyInfoTile/supplyInfoTile')
const InvoiceInfoTile = require('./invoiceInfoTile/invoiceInfoTile')
const DefaultButton = require('./../defaultButton')
const { Col, Row } = require('react-bootstrap')
const { object, func, string } = React.PropTypes

const Profile = React.createClass({
  propTypes: {
    data: object,
    getInfo: func,
    resetState: func,
    status: string,
    lol: string,
    couilles: string
  },
  componentDidMount () {
    this.props.getInfo()
  },
  componentWillUnmount () {
    this.props.resetState()
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
    console.log(this.state.distance)
  },
  render () {
    return (
      <div>
        {
          (this.props.status !== 'data'
            ? <h1>Loading</h1>
            : <div>
              <Row>
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
              </Row>
              <DefaultButton
                onSubmit={this.onValidationEvent}
                title='Enviar' />
            </div>
          )
        }
      </div>
    )
  }
})

module.exports = Profile
