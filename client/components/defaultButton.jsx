const React = require('react')
const { string, func } = React.PropTypes
const { Button } = require('react-bootstrap')

const DefaultButton = React.createClass({
  propTypes: {
    title: string,
    onSubmit: func,
    class: string
  },
  render () {
    return (
      <Button className={this.props.class}
        bsStyle='primary'
        onClick={this.props.onSubmit}>
        {this.props.title}
      </Button>
    )
  }
})

module.exports = DefaultButton
