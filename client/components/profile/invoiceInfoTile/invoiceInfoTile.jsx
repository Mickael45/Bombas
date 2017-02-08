const React = require('react')
const InvoiceNumberBox = require('./../../defaultBox')
const DateAndTimeBox = require('./../../defaultBox')
const { Col } = require('react-bootstrap')
const { string } = React.PropTypes

const InvoiceInfoTile = React.createClass({
  propTypes: {
    number: string,
    date: string
  },
  render () {
    return (
      <div>
        <h3 className='tile-title'>Fatura</h3>
        <Col md={6} xs={6}>
          <InvoiceNumberBox
            title='Número da fatura'
            value={this.props.number} />
        </Col>
        <Col md={6} xs={6}>
          <DateAndTimeBox
            title='Data e hora'
            value={this.props.date} />
        </Col>
      </div>
    )
  }
})

module.exports = InvoiceInfoTile
