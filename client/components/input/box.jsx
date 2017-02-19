const React = require('react')
const { string } = React.PropTypes

const GenericBox = React.createClass({
  propTypes: {
    title: string,
    value: string
  },
  render () {
    return (
      <div className='input-field'>
        <input disabled id='first_name' className='validate' value={this.props.value} />
        <label htmlFor='text' className='active'>{this.props.title}</label>
      </div>
    )
  }
})

module.exports = GenericBox
