const React = require('react')
const { string, func, bool } = React.PropTypes
const { Button } = require('react-bootstrap')

const DefaultButton = React.createClass({
  propTypes: {
    title: string,
    onSubmit: func,
    class: string,
    disabled: bool
  },
  render () {
    return (
      <Button className={this.props.class}
        bsStyle='primary'
        onClick={this.props.onSubmit}
        disabled={this.props.disabled}>
        {this.props.title}
      </Button>
    )
  }
})

module.exports = DefaultButton
