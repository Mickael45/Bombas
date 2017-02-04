const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const GasAmountBox = React.createClass({
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>Litros</ControlLabel>
        <FormControl.Static>
          580
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = GasAmountBox
