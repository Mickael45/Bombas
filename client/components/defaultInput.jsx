const React = require('react')
import { FormGroup, FormControl } from 'react-bootstrap'
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
        <p className='input-title'>
          {this.props.title}
        </p>
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
