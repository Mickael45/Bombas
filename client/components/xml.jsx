const React = require('react')
const DatePicker = require('./miscellaneous/datePicker')
const Button = require('./buttons/button')
const moment = require('moment')
const AlertPopUp = require('./miscellaneous/alertPopUp')
const { func, object } = React.PropTypes

const XmlContainer = React.createClass({
  propTypes: {
    createXmlFile: func,
    error: object,
    resetError: func
  },
  getInitialState () {
    return {
      beginning: moment().subtract(1, 'month'),
      ending: moment()
    }
  },
  handleDateChange (value) {
    this.setState({ beginning: value.startDate })
    this.setState({ ending: value.endDate })
  },
  onValidationEvent () {
    this.props.createXmlFile(this.state.beginning._d, this.state.ending._d)
  },
  render () {
    return (
      <div>
        {
          (this.props.error)
          ? <AlertPopUp {...this.props.error} onClick={this.props.resetError} />
        : <div className='center-align'>
          <DatePicker
            beginning={this.state.beginning}
            ending={this.state.ending}
            handleDateChange={this.handleDateChange} />
          <div className='row'>
            <Button
              class='validation-button'
              onSubmit={this.onValidationEvent}
              title='Crear xml' />
          </div>
        </div>
        }
      </div>
    )
  }
})

module.exports = XmlContainer
