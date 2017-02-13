const React = require('react')
const Box = require('./../../input/box')
const { Col, FormGroup, FormControl, ControlLabel } = require('react-bootstrap')
const { string, func, array } = React.PropTypes

const GasStationInfoTile = React.createClass({
  propTypes: {
    cidade: string,
    morada: string,
    nome: string,
    codigoPostal: string,
    onChange: func,
    bombas: array
  },
  getInitialState () {
    return {
      pumpNumber: this.props.bombas.length,
      options: [
        <option key='0' value='select'>select</option>
      ]
    }
  },
  componentWillMount () {
    for (var i = 0; i < this.state.pumpNumber; i++) {
      var key = i + 1
      this.state.options.push(
        <option key={key.toString()}>
          {key}
        </option>
      )
    }
  },
  render () {
    return (
      <div>
        <h3 className='tile-title'>Estabelecimento</h3>
        <Col md={4} xs={4}>
          <Box
            title='Nome'
            value={this.props.nome} />
        </Col>
        <Col md={4} xs={4}>
          <Box
            title='Cidade'
            value={this.props.cidade} />
        </Col>
        <Col md={4} xs={4}>
          <Box
            title='Morada'
            value={this.props.morada} />
        </Col>
        <Col md={6} xs={6}>
          <Box
            title='Código Postal'
            value={this.props.codigoPostal} />
        </Col>
        <Col md={6} xs={6}>
          <FormGroup controlId='formControlsSelect'>
            <ControlLabel className='input-title'>
              Bomba
            </ControlLabel>
            <FormControl onChange={this.props.onChange} componentClass='select' placeholder='select'>
              {this.state.options}
            </FormControl>
          </FormGroup>
        </Col>
      </div>
    )
  }
})

module.exports = GasStationInfoTile
