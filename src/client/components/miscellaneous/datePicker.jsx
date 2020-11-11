const React = require('react')
const { func, object } = React.PropTypes
import { DateRange } from 'react-date-range'

const GenericDatePicker = React.createClass({
  propTypes: {
    beginning: object,
    ending: object,
    handleDateChange: func
  },
  render () {
    return (
      <div>
        <DateRange
          startDate={this.props.beginning}
          endDate={this.props.ending}
          onChange={this.props.handleDateChange}
        />
      </div>
    )
  }
})
module.exports = GenericDatePicker
