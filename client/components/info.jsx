const React = require('react')
const StationInfoTile = require('./tiles/info/station')
const VehicleInfoTile = require('./tiles/info/vehicle')
const ClientInfoTile = require('./tiles/info/client')
const Button = require('./buttons/button')
const AlertTile = require('./miscellaneous/alertPopUp')
const NumPad = require('./miscellaneous/numPad')
const { Col } = require('react-bootstrap')
const { object, func, string, bool } = React.PropTypes

const InfoComponent = React.createClass({
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
      isButtonDisabled: true,
      options: [
        <option key='0' value='select'>select</option>
      ],
      optionIndex: 0
    }
  },
  checkForButtonDisability () {
    if (this.state.distance.length > 0 && this.state.optionIndex > 0) {
      this.setState({ isButtonDisabled: false })
    } else {
      this.setState({ isButtonDisabled: true })
    }
  },
  onDistanceChangeEvent (e) {
    this.setState({ distance: e.target.value }, () => {
      this.checkForButtonDisability()
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
    if (this.props.error) {
      this.props.resetInfo()
    }
  },
  onSendEvent () {
    this.props.verifyPin(this.props.vehicleId, this.state.pin, () => {
      if (this.props.isPinVerified) {
        var obj = {
          bombaId: this.state.optionIndex,
          stationId: this.props.stationId,
          vehicleId: this.props.vehicleId,
          km: this.state.distance
        }
        this.props.sendInfo(obj, () => {
          this.props.resetInfo()
        })
      } else {
        this.setState({ pin: '' })
      }
    })
  },
  onSelectChange (e) {
    this.setState({ optionIndex: e.target.value }, () => {
      this.checkForButtonDisability()
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
                  <StationInfoTile
                    onChange={this.onSelectChange}
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
                <Button
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

module.exports = InfoComponent
