const React = require('react')
const DatePicker = require('./datePicker')
const XmlButton = require('./xmlButton')

const Xml = React.createClass({
  render () {
    return (
      <div>
        <DatePicker />
        <XmlButton />
      </div>
    )
  }
})

module.exports = Xml
