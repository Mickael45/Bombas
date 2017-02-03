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
        <ControlLabel>Digite o indicativo</ControlLabel>
        <FormControl type='text' value={this.state.countryCode} placeholder='indicativo' onChange={this.handleCountryCodeChange} />
      </FormGroup>
    )
  }
})

module.exports = CountryCodeBox
