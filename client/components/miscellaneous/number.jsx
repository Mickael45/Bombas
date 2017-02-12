const React = require('react')
const { func, string } = React.PropTypes

const Number = React.createClass({
  propTypes: {
    onClick: func,
    classToUse: string,
    number: string
  },
  onNumberClick () {
    this.props.onClick(this.props.number)
  },
  render () {
    return (
      <li className={this.props.classToUse} onClick={this.onNumberClick}>{this.props.number}</li>
    )
  }
})

module.exports = Number
