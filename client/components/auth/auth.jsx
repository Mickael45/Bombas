const React = require('react')
const SignUpForm = require('./signUpForm/signUpForm')
const ValidationCodeForm = require('./validationCodeForm/validationCodeForm')
const { func, string } = React.PropTypes
const { Col } = require('react-bootstrap')

const checkBirthDate = (birthDate) => {
  if (birthDate.length !== 8 || birthDate[2] !== '/' || birthDate[5] !== '/') {
    console.log('bad format')
    return false
  } else {
    for (var i = 0; i < 8; i++) {
      if (i === 2 || i === 5) {
        i++
      }
      if (birthDate[i] !== '0' && birthDate[i] !== '1' && birthDate[i] !== '2' &&
      birthDate[i] !== '3' && birthDate[i] !== '4' && birthDate[i] !== '5' &&
      birthDate[i] !== '6' && birthDate[i] !== '7' && birthDate[i] !== '8' && birthDate[i] !== '9') {
        console.log('only numbers allowed')
        return false
      }
    }
  }
  return true
}

const Auth = React.createClass({
  propTypes: {
    signMeUpByPhone: func,
    validateCode: func,
    resendCode: func,
    status: string
  },
  getInitialState () {
    return {
      phoneNumber: '',
      countryCode: '',
      validationCode: '',
      birthDate: ''
    }
  },
  onPhoneNumberSubmit () {
    console.log('----------Phone submit----------')
    if (!checkBirthDate(this.state.birthDate)) {
      return
    }
    this.props.signMeUpByPhone(this.state.phoneNumber,
      this.state.countryCode,
      this.state.birthDate)
  },
  onValidationCodeSubmit () {
    console.log('----------Validation code submit----------')
    this.props.validateCode(this.state.validationCode)
  },
  onResendCodeSubmit () {
    console.log('----------Resend code submit----------')
    this.props.resendCode()
  },
  onPhoneNumberChangeEvent (e) {
    this.setState({ phoneNumber: e.target.value })
  },
  onCountryCodeChangeEvent (e) {
    this.setState({ countryCode: e.target.value })
  },
  onValidationCodeChange (e) {
    this.setState({ validationCode: e.target.value })
  },
  onBirthDateChangeEvent (e) {
    this.setState({ birthDate: e.target.value })
  },
  render () {
    return (
      <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
        {
          (this.props.status === 'waiting'
          ? <ValidationCodeForm
            validationCode={this.state.validationCode}
            onValidationCodeChange={this.onValidationCodeChange}
            onValidationCodeSubmit={this.onValidationCodeSubmit}
            onResendCodeSubmit={this.onResendCodeSubmit} />
          : this.props.status === 'not subscribed'
          ? <SignUpForm
            phoneNumber={this.state.phoneNumber}
            onPhoneNumberChangeEvent={this.onPhoneNumberChangeEvent}
            countryCode={this.state.countryCode}
            onCountryCodeChangeEvent={this.onCountryCodeChangeEvent}
            onPhoneNumberSubmit={this.onPhoneNumberSubmit}
            birthDate={this.state.birthDate}
            onBirthDateChangeEvent={this.onBirthDateChangeEvent} />
          : <h1>Log in</h1>)
        }
      </Col>
    )
  }
})

module.exports = Auth
