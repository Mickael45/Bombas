const React = require('react')
const Box = require('./../../input/box')
const { Col } = require('react-bootstrap')
const { string } = React.PropTypes

const ClientInfoTile = React.createClass({
  propTypes: {
    nif: string,
    nome: string,
    pais: string
  },
  render () {
    return (
      <div>
        <h3 className='tile-title'>Cliente</h3>
        <Col md={4} xs={4}>
          <Box
            title='Nome'
            value={this.props.nome} />
        </Col>
        <Col md={4} xs={4}>
          <Box
            title='País'
            value={this.props.pais} />
        </Col>
        <Col md={4} xs={4}>
          <Box
            title='NIF'
            value={this.props.nif} />
        </Col>
      </div>
    )
  }
})

module.exports = ClientInfoTile
