const React = require('react')
const DateAndTimeBox = require('./../../defaultBox')
const GasAmountBox = require('./../../defaultBox')
const GasPriceBox = require('./../../defaultBox')
const { string } = React.PropTypes

const SupplyInfoTile = React.createClass({
  propTypes: {
    date: string,
    liters: string,
    price: string
  },
  render () {
    return (
      <div>
        <h3>Abastecimento</h3>
        <DateAndTimeBox
          title='Data e hora'
          value={this.props.date} />
        <GasAmountBox
          title='Litros'
          value={this.props.liters} />
        <GasPriceBox
          title='Preço'
          value={this.props.price} />
      </div>
    )
  }
})

module.exports = SupplyInfoTile
