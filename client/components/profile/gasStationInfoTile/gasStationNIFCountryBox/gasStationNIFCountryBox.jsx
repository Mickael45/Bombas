const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const GasStationNIFCountry = React.createClass({
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>País emissor do NIF</ControlLabel>
        <FormControl.Static>
          'Portugal'
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = GasStationNIFCountry
