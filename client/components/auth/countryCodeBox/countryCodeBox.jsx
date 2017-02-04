const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const CountryCodeBox = React.createClass({
  getInitialState () {
    return {
      countryCode: ''
    }
  },
  handleCountryCodeChange (e) {
    this.setState({ countryCode: e.target.value })
  },
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>Indicativo</ControlLabel>
        <FormControl type='text' className='tile' value={this.state.countryCode} placeholder='Indicativo' onChange={this.handleCountryCodeChange} />
      </FormGroup>
    )
  }
})

module.exports = CountryCodeBox
