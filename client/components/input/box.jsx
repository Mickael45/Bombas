const React = require('react')
import { FormGroup, FormControl } from 'react-bootstrap'
const { string, bool } = React.PropTypes

const GenericBox = React.createClass({
  propTypes: {
    title: string,
    value: string,
    boolValue: bool
  },
  getInitialState () {
    return {
      value: (this.props.value) ? this.props.value
      : (this.props.boolValue) ? 'Sim' : 'Não'
    }
  },
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <p className='tile-content-title'>
          {this.props.title}
        </p>
        <FormControl.Static className='tile-content'>
          {this.state.value}
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = GenericBox
