const React = require('react')
const DefaultBox = require('./../../defaultBox')
const { Col } = require('react-bootstrap')
const { string } = React.PropTypes

const ClientInfoTile = React.createClass({
  propTypes: {
    vat: string,
    nome: string,
    pais: string
  },
  render () {
    return (
      <div>
        <h3 className='tile-title'>Cliente</h3>
        <Col md={4} xs={4}>
          <DefaultBox
            title='Nome'
            value={this.props.nome} />
        </Col>
        <Col md={4} xs={4}>
          <DefaultBox
            title='País'
            value={this.props.pais} />
        </Col>
        <Col md={4} xs={4}>
          <DefaultBox
            title='NIF'
            value={this.props.vat} />
        </Col>
      </div>
    )
  }
})

module.exports = ClientInfoTile
