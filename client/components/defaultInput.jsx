const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
const { string, func } = React.PropTypes

const DefaultInput = React.createClass({
  propTypes: {
    title: string,
    value: string,
    placeholder: string,
    onChange: func
  },
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='title'>
          {this.props.title}
        </ControlLabel>
        <FormControl
          className='input'
          type='text'
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange} />
      </FormGroup>
    )
  }
})

module.exports = DefaultInput
