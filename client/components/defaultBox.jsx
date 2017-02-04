const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
const { string } = React.PropTypes

const Testbox = React.createClass({
  propTypes: {
    title: string,
    value: string
  },
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>{this.props.title}</ControlLabel>
        <FormControl.Static>
          {this.props.value}
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = Testbox
