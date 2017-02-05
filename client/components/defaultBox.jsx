const React = require('react')
import { FormGroup, FormControl } from 'react-bootstrap'
const { string } = React.PropTypes

const DefaultBox = React.createClass({
  propTypes: {
    title: string,
    value: string
  },
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <h3>
          {this.props.title}
        </h3>
        <FormControl.Static className='title'>
          {this.props.value}
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = DefaultBox
