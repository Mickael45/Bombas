const React = require('react')
const InvoiceNumberBox = require('./invoiceNumberBox/invoiceNumberBox')
const DateAndTimeBox = require('./../supplyInfoTile/dateAndTimeBox/dateAndTimeBox')

const InvoiceInfoTile = React.createClass({
  render () {
    return (
      <div>
        <InvoiceNumberBox />
        <DateAndTimeBox />
      </div>
    )
  }
})

module.exports = InvoiceInfoTile
