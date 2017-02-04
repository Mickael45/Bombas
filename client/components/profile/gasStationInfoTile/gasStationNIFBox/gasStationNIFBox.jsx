const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const GasStationNIFBox = React.createClass({
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>NIF do estabelecimento</ControlLabel>
        <FormControl.Static>
          'faf79f48af9f4a9f4af9'
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = GasStationNIFBox
