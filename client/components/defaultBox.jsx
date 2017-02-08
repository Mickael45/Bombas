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
        <p className='tile-content-title'>
          {this.props.title}
        </p>
        <FormControl.Static className='tile-content'>
          {this.props.value}
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = DefaultBox
