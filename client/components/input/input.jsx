const React = require('react')
import { FormGroup, FormControl } from 'react-bootstrap'
const { string, func } = React.PropTypes

const GenericInput = React.createClass({
  propTypes: {
    title: string,
    value: string,
    placeholder: string,
    onChange: func,
    type: string
  },
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <p className='input-title'>
          {this.props.title}
        </p>
        <FormControl
          className='input'
          type={this.props.type}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange} />
      </FormGroup>
    )
  }
})

module.exports = GenericInput
