const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const InvoiceNumberBox = React.createClass({
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>Número da fatura</ControlLabel>
        <FormControl.Static>
          35-01/17
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = InvoiceNumberBox
