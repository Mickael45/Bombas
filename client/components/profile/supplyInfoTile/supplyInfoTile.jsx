const React = require('react')
const DateAndTimeBox = require('./dateAndTimeBox/dateAndTimeBox')
const GasAmountBox = require('./gasAmountBox/gasAmountBox')

const SupplyInfoTile = React.createClass({
  render () {
    return (
      <div>
        <DateAndTimeBox />
        <GasAmountBox />
      </div>
    )
  }
})

module.exports = SupplyInfoTile
