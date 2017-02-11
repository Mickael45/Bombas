const React = require('react')
// const SignUpForm = require('./signUpForm/signUpForm')
const SignInForm = require('./signInForm/signInForm')
// const ValidationCodeForm = require('./validationCodeForm/validationCodeForm')
const AlertTile = require('./../alertTile')
const { func, string, object } = React.PropTypes
const { Col } = require('react-bootstrap')

/* const isOnlyMadeOfNumbers = (birthDate, length) => {
  if (birthDate.length !== length) {
    console.log('6 numbers required')
    return false
  }
  for (var i = 0; i < length; i++) {
    if (birthDate[i] !== '0' && birthDate[i] !== '1' && birthDate[i] !== '2' &&
    birthDate[i] !== '3' && birthDate[i] !== '4' && birthDate[i] !== '5' &&
    birthDate[i] !== '6' && birthDate[i] !== '7' && birthDate[i] !== '8' && birthDate[i] !== '9') {
      if ((i !== 2 && i !== 5) || birthDate[i] !== '/') {
        console.log('only numbers allowed')
        return false
      }
    }
  }
  return true
} */

/* const checkBirthDate = (birthDate, length) => {
  if (birthDate.length !== length || birthDate[2] !== '/' || birthDate[5] !== '/') {
    console.log('bad format')
    return false
  } else {
    if (!isOnlyMadeOfNumbers(birthDate, length)) {
      return false
    }
    return true
  }
} */

const Auth = React.createClass({
  propTypes: {
    signMeUpByPhone: func,
    signMeInByPhone: func,
    validateCode: func,
    error: object,
    resendCode: func,
    status: string
  },
  getInitialState () {
    return {
      phoneNumber: '',
      countryCode: '',
      validationCode: '',
      birthDate: '',
      password: ''
    }
  },
  onSignUpSubmit () {
    /* if (!checkBirthDate(this.state.birthDate, 8)) {
      return
    } */
    this.props.signMeUpByPhone(this.state.phoneNumber,
      this.state.countryCode,
      this.state.birthDate)
  },
  onSignInSubmit () {
    this.props.signMeInByPhone(this.state.phoneNumber, this.state.password)
  },
  onValidationCodeSubmit () {
    this.props.validateCode(this.state.validationCode)
  },
  onResendCodeSubmit () {
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
  onPasswordChangeEvent (e) {
    this.setState({ password: e.target.value })
  },
  render () {
    return (
      <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
        {
          (this.props.error)
          ? <AlertTile {...this.props.error} />
        : <div />
        }
        {
        (this.props.status === 'authenticated')
          ? <h3>Connected</h3>
        : <SignInForm
          phoneNumber={this.state.phoneNumber}
          onPhoneNumberChangeEvent={this.onPhoneNumberChangeEvent}
          onSignInSubmit={this.onSignInSubmit}
          password={this.state.password}
          onPasswordChangeEvent={this.onPasswordChangeEvent} />
      }
      </Col>
    )
  }
})

module.exports = Auth
