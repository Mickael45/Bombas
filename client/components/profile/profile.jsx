const React = require('react')
const GasStationInfoTile = require('./gasStationInfoTile/gasStationInfoTile')
const VehicleInfoTile = require('./vehicleInfoTile/vehicleInfoTile')
const ClientInfoTile = require('./clientInfoTile/clientInfoTile')
const DefaultButton = require('./../defaultButton')
const { Col } = require('react-bootstrap')
const { object, func, string } = React.PropTypes

const Profile = React.createClass({
  propTypes: {
    data: object,
    getInfo: func,
    sendInfo: func,
    status: string,
    vehicleId: string,
    stationId: string
  },
  componentDidMount () {
    this.props.getInfo(this.props.vehicleId, this.props.stationId)
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
    var obj = {
      bombaId: '2',
      stationId: this.props.stationId,
      vehicleId: this.props.vehicleId,
      km: this.state.distance
    }
    this.props.sendInfo(obj)
  },
  render () {
    return (
      <div>
        {
          (this.props.status !== 'data'
            ? <h1>Loading</h1>
            : <div>
              <Col md={3} xs={8} xsOffset={2}>
                <GasStationInfoTile
                  {...this.props.data.station} />
              </Col>
              <Col md={3} xs={8} xsOffset={2}>
                <VehicleInfoTile
                  {...this.props.data.vehicle}
                  distance={this.state.distance}
                  onDistanceChangeEvent={this.onDistanceChangeEvent} />
              </Col>
              <Col md={3} xs={8} xsOffset={2}>
                <ClientInfoTile
                  {...this.props.data.client}
                  />
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
