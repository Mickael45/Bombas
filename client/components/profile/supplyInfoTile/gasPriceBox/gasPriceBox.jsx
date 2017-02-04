const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const GasPriceBox = React.createClass({
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>Preço</ControlLabel>
        <FormControl.Static>
          1.35
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = GasPriceBox
