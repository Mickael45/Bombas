const React = require('react')
const DefaultInput = require('./../../defaultInput')
const DefaultButton = require('./../../defaultButton')
const { string, func } = React.PropTypes

const ValidationCodeForm = React.createClass({
  propTypes: {
    validationCode: string,
    onValidationCodeChange: func,
    onValidationCodeSubmit: func,
    onResendCodeSubmit: func
  },
  render () {
    return (
      <div>
        <DefaultInput
          title='Indica o código'
          placeholder='código' value={this.props.validationCode}
          onChange={this.props.onValidationCodeChange} />
        <DefaultButton
          class='button'
          title='Enviar'
          onSubmit={this.props.onValidationCodeSubmit} />
        <DefaultButton
          class='button'
          title='Novo código'
          onSubmit={this.props.onResendCodeSubmit} />
      </div>
    )
  }
})

module.exports = ValidationCodeForm
