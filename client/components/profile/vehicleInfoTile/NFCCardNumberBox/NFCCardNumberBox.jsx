const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const NFCCardNumberBox = React.createClass({
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>Numero do cartão NFC</ControlLabel>
        <FormControl.Static>
          789456321
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = NFCCardNumberBox
