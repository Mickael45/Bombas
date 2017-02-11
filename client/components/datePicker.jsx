const React = require('react')
const DP = require('react-bootstrap-date-picker')
const { func, string } = React.PropTypes
const { FormGroup, Col } = require('react-bootstrap')

const DatePicker = React.createClass({
  propTypes: {
    beginning: string,
    ending: string,
    handleBeginningChange: func,
    handleEndingChange: func
  },
  render () {
    return (
      <div>
        <Col md={3} mdOffset={3} xs={3} xsOffset={3}>
          <FormGroup>
            <p className='input-title'>
              Desde
            </p>
            <DP id='example-datepicker' value={this.props.beginning} onChange={this.props.handleBeginingChange} />
          </FormGroup>
        </Col>
        <Col md={3} xs={3}>
          <FormGroup>
            <p className='input-title'>
              Até
            </p>
            <DP id='example-datepicker' value={this.props.ending} onChange={this.props.handleEndingChange} />
          </FormGroup>
        </Col>
      </div>
    )
  }
})

module.exports = DatePicker
