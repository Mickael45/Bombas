const React = require('react')
const Input = require('./../../input/input')
const Button = require('./../../buttons/button')
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
        <Input
          title='Indica o código'
          type='text'
          placeholder='código' value={this.props.validationCode}
          onChange={this.props.onValidationCodeChange} />
        <Button
          class='button'
          title='Enviar'
          onSubmit={this.props.onValidationCodeSubmit} />
        <Button
          class='button'
          title='Novo código'
          onSubmit={this.props.onResendCodeSubmit} />
      </div>
    )
  }
})

module.exports = ValidationCodeForm
