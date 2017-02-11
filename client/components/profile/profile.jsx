const React = require('react')
const GasStationInfoTile = require('./gasStationInfoTile/gasStationInfoTile')
const VehicleInfoTile = require('./vehicleInfoTile/vehicleInfoTile')
const ClientInfoTile = require('./clientInfoTile/clientInfoTile')
const DefaultButton = require('./../defaultButton')
const AlertTile = require('./../alertTile')
const NumPad = require('./../numPad')
const { Col } = require('react-bootstrap')
const { object, func, string, bool } = React.PropTypes

const Profile = React.createClass({
  propTypes: {
    data: object,
    error: object,
    resetInfo: func,
    getInfo: func,
    sendInfo: func,
    status: string,
    vehicleId: string,
    stationId: string,
    verifyPin: func,
    isPinVerified: bool
  },
  componentDidMount () {
    this.props.getInfo(this.props.vehicleId, this.props.stationId)
  },
  getInitialState () {
    return {
      distance: '',
      isPinBoxVisible: false,
      pin: '',
      isButtonDisabled: true
    }
  },
  onDistanceChangeEvent (e) {
    this.setState({ distance: e.target.value }, () => {
      if (this.state.distance.length > 0) {
        this.setState({ isButtonDisabled: false })
      } else {
        this.setState({ isButtonDisabled: true })
      }
    })
  },
  onPinDelChangeEvent () {
    this.setState({ pin: this.state.pin.slice(0, -1) })
  },
  onPinChangeEvent (value) {
    this.setState({ pin: this.state.pin + value })
  },
  onValidationEvent () {
    this.setState({ isPinBoxVisible: true })
    this.setState({ pin: '' })
  },
  onCloseEvent () {
    this.setState({ isPinBoxVisible: false })
    this.setState({ pin: '' })
  },
  onSendEvent () {
    this.props.verifyPin(this.props.vehicleId, this.state.pin, () => {
      if (this.props.isPinVerified) {
        var obj = {
          bombaId: '2',
          stationId: this.props.stationId,
          vehicleId: this.props.vehicleId,
          km: this.state.distance
        }
        this.props.sendInfo(obj)
        this.setState({ isPinBoxVisible: false })
        this.props.resetInfo()
      } else {
        this.setState({ pin: '' })
      }
    })
  },
  render () {
    return (
      <div>
        {
          (this.props.error)
          ? <AlertTile {...this.props.error} />
        : <div />
        }
        {
          (this.state.isPinBoxVisible)
        ? <NumPad
          value={this.state.pin}
          onCloseEvent={this.onCloseEvent}
          onSendEvent={this.onSendEvent}
          onPinChangeEvent={this.onPinChangeEvent}
          onPinDelChangeEvent={this.onPinDelChangeEvent} />
      : (this.props.status !== 'data'
            ? <h1>Loading</h1>
            : <div>
              <div>
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
              <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
                <DefaultButton
                  class='validation-button'
                  onSubmit={this.onValidationEvent}
                  title='Enviar'
                  disabled={this.state.isButtonDisabled} />
              </Col>
            </div>
          )
        }
      </div>
    )
  }
})

module.exports = Profile
