const React = require('react')
const { string, func } = React.PropTypes

const GenericInput = React.createClass({
  propTypes: {
    title: string,
    value: string,
    type: string,
    onChange: func
  },
  render () {
    return (
      <div className='input-field'>
        <input id={this.props.type} type={this.props.type} className='validate' onChange={this.props.onChange} value={this.props.value} />
        <label htmlFor={this.props.type} className='active'>{this.props.title}</label>
      </div>
    )
  }
})

module.exports = GenericInput
