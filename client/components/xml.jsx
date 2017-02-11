const React = require('react')
const DatePicker = require('./datePicker')
const XmlButton = require('./xmlButton')
const { func } = React.PropTypes

const Xml = React.createClass({
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
  render () {
    return (
      <div>
        <DatePicker
          beginning={this.state.beginning}
          ending={this.state.ending}
          handleBeginningChange={this.handleBeginningChange}
          handleEndingChange={this.handleEndingChange} />
        <XmlButton />
      </div>
    )
  }
})

module.exports = Xml
