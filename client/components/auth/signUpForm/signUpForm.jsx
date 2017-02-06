const React = require('react')
const DefaultInput = require('./../../defaultInput')
const DefaultButton = require('./../../defaultButton')
const { string, func } = React.PropTypes

const SignUpForm = React.createClass({
  propTypes: {
    phoneNumber: string,
    onPhoneNumberChangeEvent: func,
    onPhoneNumberSubmit: func,
    countryCode: string,
    onCountryCodeChangeEvent: func,
    birthDate: string,
    onBirthDateChangeEvent: func
  },
  render () {
    return (
      <div>
        <h1>Registar</h1>
        <DefaultInput
          title='Indicativo'
          placeholder='indicativo'
          value={this.props.countryCode}
          onChange={this.props.onCountryCodeChangeEvent} />
        <DefaultInput
          title='Numero de telemóvel'
          placeholder='telemóvel'
          value={this.props.phoneNumber}
          onChange={this.props.onPhoneNumberChangeEvent} />
        <DefaultInput
          title='Data de nascimento'
          placeholder='dd/mm/yy'
          value={this.props.birthDate}
          onChange={this.props.onBirthDateChangeEvent} />
        <DefaultButton
          title='Enviar'
          onSubmit={this.props.onPhoneNumberSubmit} />
      </div>
    )
  }
})

module.exports = SignUpForm
