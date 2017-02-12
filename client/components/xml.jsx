const React = require('react')
const DatePicker = require('./miscellaneous/datePicker')
const Button = require('./buttons/button')
import { Row } from 'react-bootstrap'
const { func } = React.PropTypes

const XmlContainer = React.createClass({
  propTypes: {
    createXmlFile: func
  },
  getInitialState () {
    var value = new Date().toISOString()
    return {
      beginning: value,
      ending: value
    }
  },
  handleBeginningChange (value) {
    this.setState({ beginning: value })
  },
  handleEndingChange (value) {
    this.setState({ ending: value })
  },
  onValidationEvent () {
    this.props.createXmlFile(this.state.beginning, this.state.ending)
  },
  render () {
    return (
      <div>
        <Row>
          <DatePicker
            beginning={this.state.beginning}
            ending={this.state.ending}
            handleBeginningChange={this.handleBeginningChange}
            handleEndingChange={this.handleEndingChange} />
        </Row>
        <Button
          class='validation-button'
          onSubmit={this.onValidationEvent}
          title='Crear xml' />
      </div>
    )
  }
})

module.exports = XmlContainer
