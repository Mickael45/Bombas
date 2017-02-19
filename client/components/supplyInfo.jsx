const React = require('react')
const InfoTile = require('./tiles/info')
const AlertTile = require('./miscellaneous/alertPopUp')
const NumPad = require('./miscellaneous/numPad')
const Loader = require('./miscellaneous/loader')
const { object, func, string, bool } = React.PropTypes

const SupplyInfoComponent = React.createClass({
  propTypes: {
    data: object,
    error: object,
    getInfo: func,
    sendInfo: func,
    status: string,
    loading: bool,
    vehicleId: string,
    stationId: string,
    verifyPin: func,
    isPinVerified: bool,
    liters: string,
    resetVehicleError: func,
    resetSupplyInfoError: func,
    getSupplyLiters: func
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
      isPinValidationButtonDisabled: true,
      optionIndex: '0'
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
  checkPinValidity () {
    if (this.state.pin.length === 4) {
      this.setState({ isPinValidationButtonDisabled: false })
    } else {
      this.setState({ isPinValidationButtonDisabled: true })
    }
  },
  onPinDelChangeEvent () {
    this.setState({ pin: this.state.pin.slice(0, -1) }, () => {
      this.checkPinValidity()
    })
  },
  onPinChangeEvent (value) {
    this.setState({ pin: this.state.pin + value }, () => {
      this.checkPinValidity()
    })
  },
  onValidationEvent () {
    this.setState({ isPinBoxVisible: true })
    this.setState({ pin: '' })
  },
  onCloseEvent () {
    this.setState({ isPinBoxVisible: false })
    this.setState({ isPinValidationButtonDisabled: true })
  },
  onErrorClose () {
    if (this.props.error.type === 'vehicle') {
      this.props.resetVehicleError()
    } else {
      this.props.resetSupplyInfoError(this.props.error.error)
      this.setState({ optionIndex: '0' })
      this.setState({ isButtonDisabled: true })
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
        this.props.sendInfo(obj)
      } else {
        this.setState({ pin: '' })
      }
    })
  },
  onSelectChangeEvent (value, cb) {
    this.setState({ optionIndex: value }, () => {
      this.props.getSupplyLiters(this.state.optionIndex, this.props.stationId, () => {
        if (this.props.liters) {
          this.checkForButtonDisability()
        }
      })
    })
  },
  render () {
    return (
      <div>
        {
          (this.props.error.error)
          ? <AlertTile {...this.props.error.error} onClick={this.onErrorClose} />
        : (this.state.isPinBoxVisible)
          ? <NumPad
            value={this.state.pin}
            onCloseEvent={this.onCloseEvent}
            onSendEvent={this.onSendEvent}
            onPinChangeEvent={this.onPinChangeEvent}
            onPinDelChangeEvent={this.onPinDelChangeEvent}
            isPinValidationButtonDisabled={this.state.isPinValidationButtonDisabled}
            />
          : (this.props.loading || this.props.status === 'no data')
              ? <Loader />
              : <div>
                <InfoTile
                  vehicle={this.props.data.vehicle}
                  client={this.props.data.client}
                  station={this.props.data.station}
                  distance={this.state.distance}
                  onDistanceChange={this.onDistanceChangeEvent}
                  onSelectChange={this.onSelectChangeEvent}
                  liters={this.props.liters}
                  isButtonDisabled={this.state.isButtonDisabled}
                  optionIndex={this.state.optionIndex}
                  onFormValidation={this.onValidationEvent}
                  />
              </div>
            }
      </div>
    )
  }
})

module.exports = SupplyInfoComponent
