const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
const { string } = React.PropTypes

const DistanceBox = React.createClass({
  propTypes: {
    title: string
  },
  getInitialState () {
    return {
      value: ''
    }
  },
  handleDistanceChange (e) {
    this.setState({ value: e.target.value })
  },
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>{this.props.title}</ControlLabel>
        <FormControl type='text' className='tile' value={this.state.value} placeholder='Quilometragem' onChange={this.handleDistanceChange} />
      </FormGroup>
    )
  }
})

module.exports = DistanceBox
