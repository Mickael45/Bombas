const React = require('react')
const Box = require('./../../input/box')
const { Col } = require('react-bootstrap')
const { string } = React.PropTypes

const SupplyInfoTile = React.createClass({
  propTypes: {
    dataAbastecimento: string,
    volumeAbastecimento: string,
    price: string
  },
  render () {
    return (
      <div>
        <h3 className='tile-title'>Abastecimento</h3>
        <Col md={3} xs={3}>
          <Box
            title='Preço'
            value={this.props.price} />
        </Col>
        <Col md={3} xs={3}>
          <Box
            title='Litros'
            value={this.props.liters} />
        </Col>
        <Col md={6} xs={6}>
          <Box
            title='Data e hora'
            value={this.props.date} />
        </Col>
      </div>
    )
  }
})

module.exports = SupplyInfoTile
