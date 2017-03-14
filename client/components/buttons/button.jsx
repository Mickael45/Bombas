const React = require('react')
const { string, func, bool } = React.PropTypes

const GenericButton = React.createClass({
  propTypes: {
    title: string,
    onSubmit: func,
    disabled: bool
  },
  render () {
    return (
      <a className='waves-effect waves-light btn'
        onClick={this.props.onSubmit}
        disabled={this.props.disabled}>
        {this.props.title}
      </a>
    )
  }
})

module.exports = GenericButton
