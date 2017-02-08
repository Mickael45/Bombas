const React = require('react')
const DateAndTimeBox = require('./../../defaultBox')
const GasAmountBox = require('./../../defaultBox')
const GasPriceBox = require('./../../defaultBox')
const { Col } = require('react-bootstrap')
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
        <h3 className='tile-title'>Abastecimento</h3>
        <Col md={3} xs={3}>
          <GasPriceBox
            title='Preço'
            value={this.props.price} />
        </Col>
        <Col md={3} xs={3}>
          <GasAmountBox
            title='Litros'
            value={this.props.liters} />
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

module.exports = SupplyInfoTile
