const React = require('react')
const Box = require('./../../input/box')
const { Col, FormGroup, FormControl, ControlLabel } = require('react-bootstrap')
const { string, func, number } = React.PropTypes

const GasStationInfoTile = React.createClass({
  propTypes: {
    city: string,
    adress: string,
    name: string,
    zipCode: string,
    onChange: func,
    pumpNumber: number
  },
  getInitialState () {
    return {
      options: [
        <option key='0' value='select'>select</option>
      ]
    }
  },
  componentWillMount () {
    for (var i = 0; i < this.props.pumpNumber; i++) {
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
        <Col md={6} xs={6}>
          <Box
            title='Código Postal'
            value={this.props.zipCode} />
        </Col>
        <Col md={6} xs={6}>
          <FormGroup controlId='formControlsSelect'>
            <ControlLabel>Select</ControlLabel>
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
