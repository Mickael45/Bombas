const React = require('react')
const DP = require('react-bootstrap-date-picker')
const { ControlLabel, HelpBlock, FormGroup, Col } = require('react-bootstrap')

const DatePicker = React.createClass({
  getInitialState () {
    var value = new Date().toISOString()
    return {
      beginning: value,
      ending: value
    }
  },
  handleBegginingChange (value) {
    this.setState({ beginning: value })
  },
  handleEndingChange (value) {
    this.setState({ ending: value })
  },
  render () {
    return (
      <div>
        <Col md={3} mdOffset={3} xs={3} xsOffset={3}>
          <FormGroup>
            <ControlLabel>Desde</ControlLabel>
            <DP id='example-datepicker' value={this.state.beginning} onChange={this.handleBegginingChange} />
            <HelpBlock>Help</HelpBlock>
          </FormGroup>
        </Col>
        <Col md={3} xs={3}>
          <FormGroup>
            <ControlLabel>Até</ControlLabel>
            <DP id='example-datepicker' value={this.state.ending} onChange={this.handleChandleEndingChangehange} />
            <HelpBlock>Help</HelpBlock>
          </FormGroup>
        </Col>
      </div>
    )
  }
})

module.exports = DatePicker
