const React = require('react')
const SignUpForm = require('./signUpForm/signUpForm')
const ValidationCodeForm = require('./validationCodeForm/validationCodeForm')
const { func, string } = React.PropTypes
const { Col } = require('react-bootstrap')

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
      validationCode: ''
    }
  },
  onPhoneNumberSubmit () {
    console.log('----------Phone submit----------')
    this.props.signMeUpByPhone(this.state.phoneNumber, this.state.countryCode)
  },
  onValidationCodeSubmit () {
    console.log('----------Validation code submit----------')
    this.prpos.validateCode(this.state.validationCode)
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
  render () {
    return (
      <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
        {
          (this.props.status === 'authenticated'
          ? <ValidationCodeForm
            validationCode={this.state.validationCode}
            onValidationCodeChange={this.onValidationCodeChange}
            onValidationCodeSubmit={this.onValidationCodeSubmit}
            onResendCodeSubmit={this.onResendCodeSubmit} />
          : <SignUpForm
            phoneNumber={this.state.phoneNumber}
            onPhoneNumberChangeEvent={this.onPhoneNumberChangeEvent}
            countryCode={this.state.countryCode}
            onCountryCodeChangeEvent={this.onCountryCodeChangeEvent}
            onPhoneNumberSubmit={this.onPhoneNumberSubmit} />)
        }
      </Col>
    )
  }
})

module.exports = Auth
