const React = require('react')
const Box = require('./../../input/box')
const Input = require('./../../input/input')
const { Col } = require('react-bootstrap')
const { string, func, bool } = React.PropTypes

const VehicleInfoTile = React.createClass({
  propTypes: {
    activo: bool,
    pesoBruto: string,
    matricula: string,
    distance: string,
    pais: string,
    onDistanceChangeEvent: func
  },
  render () {
    return (
      <div>
        <h3 className='tile-title'>Veículo</h3>
        <Col md={4} xs={4}>
          <Box
            title='Matrícula'
            value={this.props.matricula} />
        </Col>
        <Col md={4} xs={4}>
          <Box
            title='País'
            value={this.props.pais} />
        </Col>
        <Col md={4} xs={4}>
          <Box
            title='Activo'
            boolValue={this.props.activo} />
        </Col>
        <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
          <Input
            title='Quilometragem'
            type='text'
            placeholder='Quilometragem'
            onChange={this.props.onDistanceChangeEvent} />
        </Col>
        {
          (this.props.pais !== 'PT')
          ? <Col md={8} mdOffset={2} xs={8} xsOffset={2}>
            <Box
              title='Peso total em carga permitido'
              value={this.props.pesoBruto} />
          </Col>
          : <div />
        }
      </div>
    )
  }
})

module.exports = VehicleInfoTile
