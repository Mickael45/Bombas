const React = require('react')
const { browserHistory } = require('react-router')
const { func, string, bool } = React.PropTypes

const NavBar = React.createClass({
  propTypes: {
    logout: func,
    status: string,
    toSignInStatus: func,
    toSignUpStatus: func,
    isUserAdmin: bool
  },
  onClickEvent () {
    if (browserHistory) {
      browserHistory.push('/xml')
    }
  },
  render () {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a className='brand-logo center'>GPFrota</a>
          <ul className='right'>
            {
              (this.props.status === 'authenticated')
              ? <li><a onClick={this.props.logout}>Sair</a></li>
              : <div />
            }
            {
              (this.props.isUserAdmin)
              ? <li><a onClick={this.onClickEvent}>Xml</a></li>
              : <div />
            }
          </ul>
        </div>
      </nav>
    )
  }
})

module.exports = NavBar
