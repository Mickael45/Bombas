const React = require('react')
const { browserHistory } = require('react-router')
const { Navbar, Nav, NavItem } = require('react-bootstrap')
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
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a className='navBar-title'>React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {
              (this.props.status === 'authenticated'
              ? <Nav pullRight>
                <NavItem onClick={this.props.logout} className='navBar-link'>Sair</NavItem>
              </Nav>
            : <div />
              )
            }
            {
              (this.props.isUserAdmin)
              ? <Nav pullRight>
                <NavItem onClick={this.onClickEvent} className='navBar-link'>xml</NavItem>
              </Nav>
              : <div />
            }
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
})

module.exports = NavBar
