const React = require('react')
const DefaultBox = require('./../../defaultBox')
const { Col } = require('react-bootstrap')
const { string } = React.PropTypes

const GasStationInfoTile = React.createClass({
  propTypes: {
    code: string,
    NIF: string,
    country: string
  },
  render () {
    return (
      <div>
        <h3 className='tile-title'>Estabelecimento</h3>
        <Col md={4} xs={4}>
          <DefaultBox
            title='Código'
            value={this.props.code} />
        </Col>
        <Col md={4} xs={4}>
          <DefaultBox
            title='NIF'
            value={this.props.NIF} />
        </Col>
        <Col md={4} xs={4}>
          <DefaultBox
            title='País do NIF'
            value={this.props.country} />
        </Col>
      </div>
    )
  }
})

module.exports = GasStationInfoTile
