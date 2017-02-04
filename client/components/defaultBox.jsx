const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
const { string } = React.PropTypes

const DefaultBox = React.createClass({
  propTypes: {
    title: string,
    value: string
  },
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel>{this.props.title}</ControlLabel>
        <FormControl.Static>
          {this.props.value}
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = DefaultBox
