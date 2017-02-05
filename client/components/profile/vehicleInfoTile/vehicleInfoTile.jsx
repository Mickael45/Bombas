const React = require('react')
const DefaultBox = require('./../../defaultBox')
const DefaultInput = require('./../../defaultInput')
const { Col } = require('react-bootstrap')
const { string, func } = React.PropTypes

const VehicleInfoTile = React.createClass({
  propTypes: {
    registrationNumber: string,
    registrationCountry: string,
    NFCCardNumber: string,
    gasType: string,
    distance: string,
    maxWeightCapacity: string,
    onDistanceChangeEvent: func
  },
  render () {
    return (
      <div>
        <h3>Veículo</h3>
        <Col md={3} xs={3}>
          <DefaultBox
            title='Matrícula'
            value={this.props.registrationNumber} />
        </Col>
        <Col md={4} xs={4}>
          <DefaultBox
            title='País emissor'
            value={this.props.registrationCountry} />
        </Col>
        <Col md={5} xs={5}>
          <DefaultBox
            title='Numero NFC'
            value={this.props.NFCCardNumber} />
        </Col>
        <Col md={6} xs={6}>
          <DefaultBox
            title='Tipo de combustível'
            value={this.props.gasType} />
        </Col>
        <Col md={6} xs={6}>
          <DefaultInput
            title='Quilometragem'
            placeholder='Quilometragem'
            onChange={this.props.onDistanceChangeEvent} />
        </Col>
        <Col md={8} mdOffset={2} xs={8} xsOffset={2}>
          <DefaultBox
            title='Peso total em carga permitido'
            value={this.props.maxWeightCapacity} />
        </Col>
      </div>
    )
  }
})

module.exports = VehicleInfoTile
