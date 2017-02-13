const React = require('react')
const Input = require('./../../input/input')
const Button = require('./../../buttons/button')
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
        <Input
          title='Numero de telemóvel'
          placeholder='telemóvel'
          type='text'
          value={this.props.phoneNumber}
          onChange={this.props.onPhoneNumberChangeEvent} />
        <Input
          title='Senha'
          type='password'
          placeholder='senha'
          value={this.props.password}
          onChange={this.props.onPasswordChangeEvent} />
        <Button
          class='button'
          title='Enviar'
          onSubmit={this.props.onSignInSubmit} />
      </div>
    )
  }
})

module.exports = SignUpForm
