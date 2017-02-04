const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const GasStationCodeBox = React.createClass({
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>Código do estabelecimento</ControlLabel>
        <FormControl.Static>
          978546311
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = GasStationCodeBox
