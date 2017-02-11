const React = require('react')
const DefaultInput = require('./../../defaultInput')
const DefaultButton = require('./../../defaultButton')
const { string, func } = React.PropTypes

const SignUpForm = React.createClass({
  propTypes: {
    phoneNumber: string,
    onPhoneNumberChangeEvent: func,
    password: string,
    onPasswordChangeEvent: func,
    onSignInSubmit: func
  },
  render () {
    return (
      <div>
        <h1>Entrar</h1>
        <DefaultInput
          title='Numero de telemóvel'
          placeholder='telemóvel'
          value={this.props.phoneNumber}
          onChange={this.props.onPhoneNumberChangeEvent} />
        <DefaultInput
          title='Senha'
          placeholder='***********'
          value={this.props.password}
          onChange={this.props.onPasswordChangeEvent} />
        <DefaultButton
          class='button'
          title='Enviar'
          onSubmit={this.props.onSignInSubmit} />
      </div>
    )
  }
})

module.exports = SignUpForm
