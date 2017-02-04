const React = require('react')
const DateAndTimeBox = require('./../../defaultBox')
const GasAmountBox = require('./../../defaultBox')
const GasPriceBox = require('./../../defaultBox')

const SupplyInfoTile = React.createClass({
  render () {
    return (
      <div>
        <h3>Abastecimento</h3>
        <DateAndTimeBox
          title='Data e hora'
          value='12/03/17' />
        <GasAmountBox
          title='Litros'
          value='800' />
        <GasPriceBox
          title='Preço'
          value='1.22' />
      </div>
    )
  }
})

module.exports = SupplyInfoTile
