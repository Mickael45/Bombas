const React = require('react')
const DatePicker = require('react-bootstrap-date-picker')
const { func, string } = React.PropTypes
const { FormGroup, Col } = require('react-bootstrap')

const GenericDatePicker = React.createClass({
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
            <DatePicker id='example-datepicker' value={this.props.beginning} onChange={this.props.handleBeginningChange} />
          </FormGroup>
        </Col>
        <Col md={3} xs={3}>
          <FormGroup>
            <p className='input-title'>
              Até
            </p>
            <DatePicker id='example-datepicker' value={this.props.ending} onChange={this.props.handleEndingChange} />
          </FormGroup>
        </Col>
      </div>
    )
  }
})

module.exports = GenericDatePicker
