const React = require('react')
const Box = require('./../../input/box')
const { Col } = require('react-bootstrap')
const { string } = React.PropTypes

const GasStationInfoTile = React.createClass({
  propTypes: {
    city: string,
    adress: string,
    name: string,
    zipCode: string
  },
  render () {
    return (
      <div>
        <h3 className='tile-title'>Estabelecimento</h3>
        <Col md={4} xs={4}>
          <Box
            title='Nome'
            value={this.props.name} />
        </Col>
        <Col md={4} xs={4}>
          <Box
            title='Cidade'
            value={this.props.city} />
        </Col>
        <Col md={4} xs={4}>
          <Box
            title='Morada'
            value={this.props.adress} />
        </Col>
        <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
          <Box
            title='Código Postal'
            value={this.props.zipCode} />
        </Col>
      </div>
    )
  }
})

module.exports = GasStationInfoTile
