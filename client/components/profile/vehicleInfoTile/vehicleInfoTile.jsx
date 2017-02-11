const React = require('react')
const DefaultBox = require('./../../defaultBox')
const DefaultInput = require('./../../defaultInput')
const { Col } = require('react-bootstrap')
const { string, func, bool } = React.PropTypes

const VehicleInfoTile = React.createClass({
  propTypes: {
    activo: bool,
    combustivel: string,
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
          <DefaultBox
            title='Matrícula'
            value={this.props.matricula} />
        </Col>
        <Col md={4} xs={4}>
          <DefaultBox
            title='País'
            value={this.props.pais} />
        </Col>
        <Col md={4} xs={4}>
          <DefaultBox
            title='Activo'
            boolValue={this.props.activo} />
        </Col>
        <Col md={6} xs={6}>
          <DefaultBox
            title='Combustível'
            value={this.props.combustivel} />
        </Col>
        <Col md={6} xs={6}>
          <DefaultInput
            title='Quilometragem'
            type='text'
            placeholder='Quilometragem'
            onChange={this.props.onDistanceChangeEvent} />
        </Col>
        {
          (this.props.pais !== 'PT')
          ? <Col md={8} mdOffset={2} xs={8} xsOffset={2}>
            <DefaultBox
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
