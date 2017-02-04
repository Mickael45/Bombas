const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const DistanceBox = React.createClass({
  getInitialState () {
    return {
      distance: ''
    }
  },
  handleDistanceChange (e) {
    this.setState({ distance: e.target.value })
  },
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>Quilometragem</ControlLabel>
        <FormControl type='text' className='tile' value={this.state.distance} placeholder='Quilometragem' onChange={this.handleDistanceChange} />
      </FormGroup>
    )
  }
})

module.exports = DistanceBox
