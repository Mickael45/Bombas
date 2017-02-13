const React = require('react')
const Input = require('./../../input/input')
const Button = require('./../../buttons/button')
const { string, func } = React.PropTypes

const SignUpForm = React.createClass({
  propTypes: {
    phoneNumber: string,
    onPhoneNumberChangeEvent: func,
    onSignUpSubmit: func,
    countryCode: string,
    onCountryCodeChangeEvent: func,
    birthDate: string,
    onBirthDateChangeEvent: func
  },
  render () {
    return (
      <div>
        <h1>Registar</h1>
        <Input
          title='Indicativo'
          type='text'
          placeholder='indicativo'
          value={this.props.countryCode}
          onChange={this.props.onCountryCodeChangeEvent} />
        <Input
          title='Numero de telemóvel'
          type='text'
          placeholder='telemóvel'
          value={this.props.phoneNumber}
          onChange={this.props.onPhoneNumberChangeEvent} />
        <Input
          title='Data de nascimento'
          type='text'
          placeholder='dd/mm/yy'
          value={this.props.birthDate}
          onChange={this.props.onBirthDateChangeEvent} />
        <Button
          class='button'
          title='Enviar'
          onSubmit={this.props.onSignUpSubmit} />
      </div>
    )
  }
})

module.exports = SignUpForm
