const React = require('react')
const InvoiceNumberBox = require('./../../defaultBox')
const DateAndTimeBox = require('./../../defaultBox')

const InvoiceInfoTile = React.createClass({
  render () {
    return (
      <div>
        <h3>Fatura</h3>
        <InvoiceNumberBox title='Número da fatura' value='35-01/17' />
        <DateAndTimeBox title='Data e hora' value='13/02/17' />
      </div>
    )
  }
})

module.exports = InvoiceInfoTile
