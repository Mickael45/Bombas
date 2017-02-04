const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const GasTypeBox = React.createClass({
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>Tipo de combustível</ControlLabel>
        <FormControl.Static>
          Gasóleo
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = GasTypeBox
