const React = require('react')
const DefaultBox = require('./../../defaultBox')
const DefaultInput = require('./../../defaultInput')
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
        <DefaultBox
          title='Matrícula'
          value={this.props.registrationNumber} />
        <DefaultBox
          title='País emissor da matrícula'
          value={this.props.registrationCountry} />
        <DefaultBox
          title='Numero do cartão NFC'
          value={this.props.NFCCardNumber} />
        <DefaultBox
          title='Tipo de combustível'
          value={this.props.gasType} />
        <DefaultInput
          title='Indica a quilometragem do veículo'
          placeholder='Quilometragem'
          onChange={this.props.onDistanceChangeEvent} />
        <DefaultBox
          title='Peso total em carga permitido'
          value={this.props.maxWeightCapacity} />
      </div>
    )
  }
})

module.exports = VehicleInfoTile
