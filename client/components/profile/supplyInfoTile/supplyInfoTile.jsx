const React = require('react')
const DateAndTimeBox = require('./dateAndTimeBox/dateAndTimeBox')
const GasAmountBox = require('./gasAmountBox/gasAmountBox')
const GasPriceBox = require('./gasPriceBox/gasPriceBox')

const SupplyInfoTile = React.createClass({
  render () {
    return (
      <div>
        <DateAndTimeBox />
        <GasAmountBox />
        <GasPriceBox />
      </div>
    )
  }
})

module.exports = SupplyInfoTile
