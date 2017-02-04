const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const DateAndTimeBox = React.createClass({
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>Data e hora</ControlLabel>
        <FormControl.Static>
          15/02/17-14h59
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = DateAndTimeBox
