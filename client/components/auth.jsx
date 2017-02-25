const React = require('react')
const SignInForm = require('./forms/auth/signIn')
const AlertTile = require('./miscellaneous/alertPopUp')
const { func, string, object, bool } = React.PropTypes

const AuthComponent = React.createClass({
  propTypes: {
    signMeInByPhone: func,
    resetError: func,
    loading: bool,
    vehicleId: string,
    error: object,
    status: string
  },
  getInitialState () {
    return {
      phoneNumber: '',
      countryCode: '',
      validationCode: '',
      birthDate: '',
      password: '',
      isButtonDisabled: true
    }
  },
  onSignInSubmit () {
    if (this.state.password && this.state.phoneNumber) {
      this.props.signMeInByPhone(this.state.phoneNumber, this.state.password, this.props.vehicleId)
    }
  },
  checkButtonDisability () {
    if (this.state.password && this.state.phoneNumber) {
      this.setState({ isButtonDisabled: false })
    } else {
      this.setState({ isButtonDisabled: true })
    }
  },
  onPhoneNumberChangeEvent (e) {
    this.setState({ phoneNumber: e.target.value }, () => {
      this.checkButtonDisability()
    })
  },
  onPasswordChangeEvent (e) {
    this.setState({ password: e.target.value }, () => {
      this.checkButtonDisability()
    })
  },
  onErrorClose () {
    this.props.resetError()
  },
  render () {
    return (
      <div>
        {
          (this.props.error)
          ? <AlertTile {...this.props.error} onClick={this.onErrorClose} />
        : (this.props.status === 'authenticated')
        ? <div className='valign-wrapper row login-box'>
          <div className='col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4'>
            <div className='card-content'>
              <span className='card-title'>Utilize o cartão do veiculo para finalizar o abastecimento</span>
            </div>
          </div>
        </div>
        : <SignInForm
          phoneNumber={this.state.phoneNumber}
          onPhoneNumberChangeEvent={this.onPhoneNumberChangeEvent}
          onSignInSubmit={this.onSignInSubmit}
          password={this.state.password}
          onPasswordChangeEvent={this.onPasswordChangeEvent}
          loading={this.props.loading}
          isButtonDisabled={this.state.isButtonDisabled} />
        }
      </div>
    )
  }
})

module.exports = AuthComponent
