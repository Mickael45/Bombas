const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const TotalWeightBox = React.createClass({
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>Peso total em carga permitido</ControlLabel>
        <FormControl.Static>
          500
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = TotalWeightBox
