const React = require('react')
const Input = require('./../../input/input')
const Button = require('./../../buttons/button')
const Loader = require('./../../miscellaneous/loader')
const { string, func, bool } = React.PropTypes

const SignUpForm = React.createClass({
  propTypes: {
    phoneNumber: string,
    onPhoneNumberChangeEvent: func,
    password: string,
    onPasswordChangeEvent: func,
    onSignInSubmit: func,
    loading: bool,
    isButtonDisabled: bool
  },
  render () {
    return (
      <div>
        <div className='valign-wrapper row login-box'>
          <div className='col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4'>
            <form>
              <div className='card-content'>
                <span className='card-title'>Entrar</span>
                <div className='row'>
                  <Input
                    title='Numero de telemóvel'
                    placeholder='telemóvel'
                    type='text'
                    value={this.props.phoneNumber}
                    onChange={this.props.onPhoneNumberChangeEvent} />
                </div>
                <div className='row'>
                  <Input
                    title='Senha'
                    type='password'
                    placeholder='senha'
                    value={this.props.password}
                    onChange={this.props.onPasswordChangeEvent} />
                </div>
                <div className='card-action right-align'>
                  <Button
                    class='button'
                    title='Enviar'
                    onSubmit={this.props.onSignInSubmit}
                    disabled={this.props.isButtonDisabled}
                     />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='center-align'>
          {
            (this.props.loading)
            ? <Loader className='right-align' />
            : <div />
          }
        </div>
      </div>
    )
  }
})

module.exports = SignUpForm
