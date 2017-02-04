const React = require('react')
const InvoiceNumberBox = require('./../../defaultBox')
const DateAndTimeBox = require('./../../defaultBox')
const { string } = React.PropTypes

const InvoiceInfoTile = React.createClass({
  propTypes: {
    number: string,
    date: string
  },
  render () {
    return (
      <div>
        <h3>Fatura</h3>
        <InvoiceNumberBox
          title='Número da fatura'
          value={this.props.number} />
        <DateAndTimeBox
          title='Data e hora'
          value={this.props.date} />
      </div>
    )
  }
})

module.exports = InvoiceInfoTile
